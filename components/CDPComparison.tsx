import React from 'react';

interface CDPComparisonProps {
  cdp1: string;
  cdp2: string;
  feature: string;
}

const CDPComparison: React.FC<CDPComparisonProps> = ({ cdp1, cdp2, feature }) => {
  // This is a placeholder implementation. In a real-world scenario, you would fetch this data from a database or API.
  const comparisonData = {
    'audience creation': {
      segment: 'Segment uses a visual interface for creating audiences based on user properties and behaviors.',
      mparticle: 'mParticle offers a rule-based audience builder with real-time updates.',
      lytics: 'Lytics provides an AI-powered audience creation tool with predictive capabilities.',
      zeotap: 'Zeotap uses a combination of first-party and third-party data for audience creation.'
    },
    'data integration': {
      segment: 'Segment offers a wide range of pre-built integrations and a RESTful API for custom integrations.',
      mparticle: 'mParticle provides SDKs for various platforms and supports server-to-server integrations.',
      lytics: 'Lytics supports both client-side and server-side integrations with a focus on real-time data processing.',
      zeotap: 'Zeotap offers integrations with major marketing platforms and supports custom API integrations.'
    },
    'reporting': {
      segment: 'Segment provides real-time data visualization and customizable dashboards.',
      mparticle: 'mParticle offers advanced analytics and reporting features with user journey analysis.',
      lytics: 'Lytics includes AI-driven insights and predictive reporting capabilities.',
      zeotap: 'Zeotap provides cross-channel attribution reporting and ROI analysis.'
    },
    'privacy compliance': {
      segment: 'Segment offers tools for data governance and compliance with regulations like GDPR and CCPA.',
      mparticle: 'mParticle includes features for data privacy management and consent collection.',
      lytics: 'Lytics provides capabilities for managing user consent and data subject access requests.',
      zeotap: 'Zeotap emphasizes privacy-by-design principles and offers tools for compliance with data protection regulations.'
    },
    'general features': {
      segment: 'Segment is known for its ease of use and extensive integration ecosystem.',
      mparticle: 'mParticle offers robust data quality and identity resolution features.',
      lytics: 'Lytics stands out for its machine learning capabilities and predictive modeling.',
      zeotap: 'Zeotap specializes in deterministic identity resolution and third-party data enrichment.'
    }
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg mt-4">
      <h3 className="text-lg font-semibold mb-2">Comparison: {feature}</h3>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h4 className="font-medium">{cdp1}</h4>
          <p>{comparisonData[feature]?.[cdp1] || 'No information available.'}</p>
        </div>
        <div>
          <h4 className="font-medium">{cdp2}</h4>
          <p>{comparisonData[feature]?.[cdp2] || 'No information available.'}</p>
        </div>
      </div>
    </div>
  );
};

export default CDPComparison;

