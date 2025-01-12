const mockDocumentation = {
  segment: {
    'set up': 'To set up a new source in Segment: 1. Log in to your Segment workspace. 2. Navigate to Connections > Sources. 3. Click "Add Source". 4. Choose your source type. 5. Follow the on-screen instructions to configure your source. 6. Save and publish your changes.',
    'integrate': 'To integrate Segment: 1. Install Segment\'s library in your app. 2. Initialize the analytics object with your write key. 3. Start tracking events using analytics.track(). 4. Identify users with analytics.identify(). 5. Set up destinations in the Segment dashboard.',
  },
  mparticle: {
    'create': 'To create a user profile in mParticle: 1. Use the mParticle SDK in your app. 2. Call mParticle.Identity.login() or mParticle.Identity.identify() with user info. 3. Set user attributes using mParticle.Identity.getCurrentUser().setUserAttribute(). 4. These profiles will be available in the mParticle dashboard.',
    'integrate': 'To integrate mParticle: 1. Add mParticle SDK to your project. 2. Initialize the SDK with your API key. 3. Implement user identification. 4. Track events using MParticle.logEvent(). 5. Configure outputs in the mParticle dashboard.',
  },
  lytics: {
    'build': 'To build an audience segment in Lytics: 1. Log in to your Lytics account. 2. Navigate to Audiences > Create Audience. 3. Use the visual editor to define segment criteria. 4. Choose from behavioral, demographic, or custom fields. 5. Preview your audience. 6. Name and save your segment.',
    'integrate': 'To integrate Lytics: 1. Include Lytics JavaScript tag in your website. 2. Use Lytics.initialize() with your API token. 3. Track events with Lytics.track(). 4. Identify users using Lytics.identify(). 5. Set up campaigns and personalization in Lytics dashboard.',
  },
  zeotap: {
    'integrate': 'To integrate your data with Zeotap: 1. Log in to your Zeotap account. 2. Go to the Integrations section. 3. Select your data source type. 4. Follow the integration wizard for your specific source. 5. Map your data fields to Zeotap\'s universal schema. 6. Set up the data transfer method (API, SFTP, etc.). 7. Validate and activate the integration.',
    'create': 'To create a segment in Zeotap: 1. Access the Zeotap platform. 2. Navigate to the Audience Builder. 3. Define your segment using available attributes and behaviors. 4. Use AND/OR logic to combine multiple conditions. 5. Preview your audience size. 6. Name and save your segment for activation.',
  },
};

export async function fetchDocumentation(cdp: string, query: string): Promise<string> {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));

  const cdpDocs = mockDocumentation[cdp.toLowerCase()] || {};
  const relevantInfo = Object.entries(cdpDocs).find(([key]) => query.toLowerCase().includes(key));

  if (relevantInfo) {
    return relevantInfo[1];
  }

  return `I couldn't find specific information about "${query}" in the ${cdp} documentation. Please check the official ${cdp} documentation for more details.`;
}

