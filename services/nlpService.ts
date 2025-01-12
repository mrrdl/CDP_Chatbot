import { fetchDocumentation } from './mockDocumentationService';

export async function processUserInput(input: string): Promise<string | { cdp1: string; cdp2: string; feature: string; comparison: string }> {
  const lowercaseInput = input.toLowerCase();

  if (!isRelevantQuestion(lowercaseInput)) {
    return "I'm sorry, but I can only answer questions related to Customer Data Platforms (CDPs). Could you please ask a question about Segment, mParticle, Lytics, or Zeotap?";
  }

  const comparisonResult = await handleComparisonQuestion(lowercaseInput);
  if (comparisonResult) {
    return comparisonResult;
  }

  const cdp = identifyCDP(lowercaseInput);
  const action = extractAction(lowercaseInput);

  try {
    const result = await fetchDocumentation(cdp, action);
    return result;
  } catch (error) {
    console.error('Error processing user input:', error);
    return "I'm sorry, I encountered an unexpected error. Please try asking your question again or rephrase it.";
  }
}

function isRelevantQuestion(input: string): boolean {
  const cdpKeywords = ['segment', 'mparticle', 'lytics', 'zeotap', 'cdp', 'customer data platform'];
  return cdpKeywords.some(keyword => input.includes(keyword));
}

function identifyCDP(input: string): string {
  if (input.includes('segment')) return 'segment';
  if (input.includes('mparticle')) return 'mparticle';
  if (input.includes('lytics')) return 'lytics';
  if (input.includes('zeotap')) return 'zeotap';
  return 'general';
}

function extractAction(input: string): string {
  const actionKeywords = ['create', 'set up', 'integrate', 'build', 'use', 'configure', 'implement', 'install', 'connect', 'manage'];
  for (const action of actionKeywords) {
    if (input.includes(action)) {
      return action;
    }
  }
  return input.replace(/[^a-zA-Z0-9 ]/g, '').trim();
}

async function handleComparisonQuestion(input: string): Promise<{ cdp1: string; cdp2: string; feature: string; comparison: string } | null> {
  const comparisonKeywords = ['compare', 'difference', 'versus', 'vs'];
  if (comparisonKeywords.some(keyword => input.includes(keyword))) {
    const cdps = ['segment', 'mparticle', 'lytics', 'zeotap'];
    const mentionedCDPs = cdps.filter(cdp => input.includes(cdp));
    
    if (mentionedCDPs.length === 2) {
      const feature = extractComparisonFeature(input);
      const cdp1Data = await fetchDocumentation(mentionedCDPs[0], feature);
      const cdp2Data = await fetchDocumentation(mentionedCDPs[1], feature);
      
      const comparison = `
        ${mentionedCDPs[0].charAt(0).toUpperCase() + mentionedCDPs[0].slice(1)}:
        ${cdp1Data}

        ${mentionedCDPs[1].charAt(0).toUpperCase() + mentionedCDPs[1].slice(1)}:
        ${cdp2Data}

        Comparison:
        Both CDPs offer ${feature} capabilities, but there are some differences in their approaches.
        ${mentionedCDPs[0].charAt(0).toUpperCase() + mentionedCDPs[0].slice(1)} ${cdp1Data.includes('offers') ? 'emphasizes' : 'focuses on'} ${cdp1Data.split('.')[0].toLowerCase()}.
        On the other hand, ${mentionedCDPs[1].charAt(0).toUpperCase() + mentionedCDPs[1].slice(1)} ${cdp2Data.includes('offers') ? 'emphasizes' : 'focuses on'} ${cdp2Data.split('.')[0].toLowerCase()}.
        Consider your specific needs and use cases when choosing between these platforms.
      `;

      return { 
        cdp1: mentionedCDPs[0], 
        cdp2: mentionedCDPs[1], 
        feature, 
        comparison 
      };
    }
  }
  return null;
}

function extractComparisonFeature(input: string): string {
  const features = ['audience creation', 'data integration', 'reporting', 'privacy compliance'];
  for (const feature of features) {
    if (input.includes(feature)) {
      return feature;
    }
  }
  return 'general features';
}

