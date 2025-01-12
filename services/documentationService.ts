import { scrapeDocumentation } from './scrapingService';

export async function searchDocumentation(cdp: string, action: string): Promise<string> {
  try {
    const result = await scrapeDocumentation(cdp, action);
    if (!result) {
      return `No specific information was found about "${action}" in the ${cdp} documentation.`;
    }
    return `Here is what I found in the ${cdp} documentation:\n\n${result}`;
  } catch (error) {
    console.error('Error searching documentation:', error);
    return `I'm sorry, I encountered an error while searching the ${cdp} documentation. Please try again later or check the official documentation.`;
  }
}
