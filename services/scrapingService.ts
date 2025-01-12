import axios from 'axios';

export async function scrapeDocumentation(cdp: string, query: string): Promise<string> {
  try {
    const response = await axios.get('http://localhost:3001/api/scrape', {
      params: { cdp, query },
    });
    return response.data.result;
  } catch (error) {
    console.error(`Error scraping documentation for ${cdp}:`, error);
    throw new Error(`Unable to scrape ${cdp} documentation.`);
  }
}
