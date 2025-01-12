const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const BASE_URLS = {
  segment: "https://segment.com/docs/",
  mparticle: "https://docs.mparticle.com/",
  lytics: "https://docs.lytics.com/",
  zeotap: "https://docs.zeotap.com/home/en-us/",
};

app.get("/api/scrape", async (req, res) => {
  const { cdp, query } = req.query;

  if (!BASE_URLS[cdp]) {
    return res.status(400).json({ error: "Invalid CDP specified." });
  }

  try {
    const baseUrl = BASE_URLS[cdp];
    const response = await axios.get(baseUrl);
    const $ = cheerio.load(response.data);

    // Extract links to relevant subpages
    const links = [];
    $("a").each((_, el) => {
      const href = $(el).attr("href");
      if (href && href.includes(query.toLowerCase())) {
        links.push(new URL(href, baseUrl).href); // Resolve relative URLs
      }
    });

    // Scrape the first relevant subpage (or multiple subpages as needed)
    let detailedContent = "";
    if (links.length > 0) {
      const subpageResponse = await axios.get(links[0]);
      const subpage$ = cheerio.load(subpageResponse.data);
      detailedContent = subpage$("body").text();
    }

    // Process the main page and subpage content
    const paragraphs = $("p")
      .map((_, el) => $(el).text())
      .get();

    const relevantParagraphs = paragraphs.filter((p) =>
      p.toLowerCase().includes(query.toLowerCase())
    );

    const result = [
      ...relevantParagraphs,
      ...(detailedContent ? [detailedContent] : []),
    ].join("\n\n");

    res.json({
      result: result || `No specific information found about "${query}" in the ${cdp} documentation.`,
    });
  } catch (error) {
    console.error(`Error scraping ${cdp} documentation:`, error);
    res.status(500).json({
      error: `An error occurred while scraping the ${cdp} documentation. Please try again later.`,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
