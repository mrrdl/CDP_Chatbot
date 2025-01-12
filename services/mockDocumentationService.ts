const mockDocumentation = {
  segment: {
    'set up': 'To set up a new source in Segment: 1. Log in to your Segment workspace. 2. Navigate to Connections > Sources. 3. Click "Add Source". 4. Choose your source type. 5. Follow the on-screen instructions to configure your source. 6. Save and publish your changes.',
    'integrate': 'To integrate Segment: 1. Install Segment\'s library in your app. 2. Initialize the analytics object with your write key. 3. Start tracking events using analytics.track(). 4. Identify users with analytics.identify(). 5. Set up destinations in the Segment dashboard.',
    'audience creation': 'Segment allows you to create audiences using their Personas product. You can define audiences based on user traits and behaviors, and sync these audiences to various marketing and analytics tools.',
    'data integration': 'Segment offers a wide range of pre-built integrations. It acts as a single API to collect analytics data and send it to hundreds of tools for marketing, analytics, and data warehousing.',
    'reporting': 'Segment provides real-time data visualization through their Protocols product. It offers customizable dashboards and reports to monitor data quality and track key metrics.',
    'privacy compliance': 'Segment offers features to help with GDPR, CCPA, and other privacy regulations. This includes data deletion requests, consent management, and data governance tools.'
  },
  mparticle: {
    'create': 'To create a user profile in mParticle: 1. Use the mParticle SDK in your app. 2. Call mParticle.Identity.login() or mParticle.Identity.identify() with user info. 3. Set user attributes using mParticle.Identity.getCurrentUser().setUserAttribute(). 4. These profiles will be available in the mParticle dashboard.',
    'integrate': 'To integrate mParticle: 1. Add mParticle SDK to your project. 2. Initialize the SDK with your API key. 3. Implement user identification. 4. Track events using MParticle.logEvent(). 5. Configure outputs in the mParticle dashboard.',
    'audience creation': 'mParticle offers an Audience Manager that allows you to create segments based on user attributes and behaviors. These audiences can be synced to various marketing and analytics platforms.',
    'data integration': 'mParticle provides a single SDK to collect data and connect it to over 300 marketing and analytics tools. It supports both client-side and server-side integrations.',
    'reporting': 'mParticle offers real-time analytics dashboards and user activity feeds. It also provides data quality monitoring and alerting features.',
    'privacy compliance': 'mParticle includes features for GDPR, CCPA, and other privacy regulations. It offers data subject request handling, consent management, and data retention controls.'
  },
  lytics: {
    'build': 'To build an audience segment in Lytics: 1. Log in to your Lytics account. 2. Navigate to Audiences > Create Audience. 3. Use the visual editor to define segment criteria. 4. Choose from behavioral, demographic, or custom fields. 5. Preview your audience. 6. Name and save your segment.',
    'integrate': 'To integrate Lytics: 1. Include Lytics JavaScript tag in your website. 2. Use Lytics.initialize() with your API token. 3. Track events with Lytics.track(). 4. Identify users using Lytics.identify(). 5. Set up campaigns and personalization in Lytics dashboard.',
    'audience creation': 'Lytics uses machine learning for advanced audience segmentation. It can automatically discover segments based on user behavior and attributes, and allows for manual segment creation as well.',
    'data integration': 'Lytics offers native integrations with many marketing and analytics tools. It can ingest data from various sources and export segments to different platforms.',
    'reporting': 'Lytics provides AI-driven insights and reporting. It offers features like content affinity reporting, user pathing analysis, and predictive analytics.',
    'privacy compliance': 'Lytics includes features for managing user consent and handling data subject access requests. It also provides tools for data governance and privacy compliance.'
  },
  zeotap: {
    'integrate': 'To integrate your data with Zeotap: 1. Log in to your Zeotap account. 2. Go to the Integrations section. 3. Select your data source type. 4. Follow the integration wizard for your specific source. 5. Map your data fields to Zeotap\'s universal schema. 6. Set up the data transfer method (API, SFTP, etc.). 7. Validate and activate the integration.',
    'create': 'To create a segment in Zeotap: 1. Access the Zeotap platform. 2. Navigate to the Audience Builder. 3. Define your segment using available attributes and behaviors. 4. Use AND/OR logic to combine multiple conditions. 5. Preview your audience size. 6. Name and save your segment for activation.',
    'audience creation': 'Zeotap\'s Audience Builder allows for the creation of segments based on first-party and third-party data. It offers a visual interface for combining various attributes and behaviors.',
    'data integration': 'Zeotap specializes in integrating and unifying customer data from multiple sources. It offers deterministic identity resolution to create a unified customer view.',
    'reporting': 'Zeotap provides analytics and reporting features, including audience insights, campaign performance tracking, and cross-channel attribution analysis.',
    'privacy compliance': 'Zeotap emphasizes privacy-by-design principles and offers tools for compliance with data protection regulations like GDPR and CCPA. It includes features for consent management and data subject rights.'
  },
};

export async function fetchDocumentation(cdp: string, query: string): Promise<string> {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));

  const cdpDocs = mockDocumentation[cdp.toLowerCase()] || {};
  const relevantInfo = Object.entries(cdpDocs).find(([key]) => query.toLowerCase().includes(key.toLowerCase()));

  if (relevantInfo) {
    return relevantInfo[1];
  }

  return `I couldn't find specific information about "${query}" in the ${cdp} documentation. Please check the official ${cdp} documentation for more details.`;
}

