const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const BASE_URLS = {
  segment: 'https://segment.com/docs/',
  mparticle: 'https://docs.mparticle.com/',
  lytics: 'https://docs.lytics.com/',
  zeotap: 'https://docs.zeotap.com/home/en-us/',
};

// Scrape documentation
app.get('/api/scrape', async (req, res) => {
  const { cdp, query } = req.query;

  if (!BASE_URLS[cdp]) {
    return res.status(400).json({ error: 'Invalid CDP specified.' });
  }

  try {
    const response = await axios.get(BASE_URLS[cdp]);
    const $ = cheerio.load(response.data);

    // Extract text from specific sections (e.g., paragraphs)
    const paragraphs = $('p').map((_, el) => $(el).text()).get();

    // Search for query relevance in extracted paragraphs
    const relevantParagraphs = paragraphs.filter(p =>
      p.toLowerCase().includes(query.toLowerCase())
    );

    // Format the response
    const result = relevantParagraphs.join('\n\n');
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
