import { CDPDocumentation } from '../types';

const mockDocumentation: CDPDocumentation = {
  segment: {
    'set up': 'To set up a new source in Segment:\n1. Log in to your Segment workspace\n2. Navigate to Connections > Sources\n3. Click "Add Source"\n4. Choose your source type\n5. Follow the on-screen instructions to configure your source\n6. Save and publish your changes',
    'integrate': 'To integrate Segment:\n1. Install Segment\'s library in your app\n2. Initialize the analytics object with your write key\n3. Start tracking events using analytics.track()\n4. Identify users with analytics.identify()\n5. Set up destinations in the Segment dashboard',
    'audience': 'To create an audience in Segment:\n1. Navigate to Personas > Audiences\n2. Click "Create Audience"\n3. Define your audience using traits and behaviors\n4. Set up sync destinations for your audience\n5. Activate the audience',
    'segment': 'To create a segment in Segment:\n1. Go to Personas > Audiences\n2. Click "Create Audience"\n3. Use the visual editor to define segment criteria\n4. Choose from user traits and behaviors\n5. Preview and name your segment\n6. Activate the segment',
    'data integration': 'Segment offers a wide range of pre-built integrations. It acts as a single API to collect analytics data and send it to hundreds of tools for marketing, analytics, and data warehousing.',
    'reporting': 'Segment provides real-time data visualization through their Protocols product. It offers customizable dashboards and reports to monitor data quality and track key metrics.',
    'privacy compliance': 'Segment offers features to help with GDPR, CCPA, and other privacy regulations. This includes data deletion requests, consent management, and data governance tools.'
  },
  mparticle: {
    'set up': 'To set up mParticle:\n1. Create an mParticle account\n2. Set up your organization and workspace\n3. Create an input for your data source (web, mobile, server)\n4. Generate API credentials for your input\n5. Implement the mParticle SDK or use server-to-server API',
    'integrate': 'To integrate mParticle:\n1. Add mParticle SDK to your project\n2. Initialize the SDK with your API key\n3. Implement user identification\n4. Track events using MParticle.logEvent()\n5. Configure outputs in the mParticle dashboard',
    'audience': 'To create an audience in mParticle:\n1. Go to Audiences in the dashboard\n2. Click "Create Audience"\n3. Define audience criteria using the visual editor\n4. Set up real-time calculations if needed\n5. Choose output platforms for the audience\n6. Activate the audience',
    'segment': 'To build a segment in mParticle:\n1. Navigate to the Audiences section\n2. Click "Create Audience"\n3. Use the drag-and-drop interface to set segment criteria\n4. Combine user attributes and behaviors\n5. Preview your segment size\n6. Name and activate the segment',
    'data integration': 'mParticle provides a single SDK to collect data and connect it to over 300 marketing and analytics tools. It supports both client-side and server-side integrations.',
    'reporting': 'mParticle offers real-time analytics dashboards and user activity feeds. It also provides data quality monitoring and alerting features.',
    'privacy compliance': 'mParticle includes features for GDPR, CCPA, and other privacy regulations. It offers data subject request handling, consent management, and data retention controls.'
  },
  lytics: {
    'set up': 'To set up Lytics:\n1. Sign up for a Lytics account\n2. Create your first project\n3. Install the Lytics tag on your website or app\n4. Set up data collection using JavaScript or server-side APIs\n5. Configure your data sources and destinations',
    'integrate': 'To integrate Lytics:\n1. Include Lytics JavaScript tag in your website\n2. Use Lytics.initialize() with your API token\n3. Track events with Lytics.track()\n4. Identify users using Lytics.identify()\n5. Set up campaigns and personalization in Lytics dashboard',
    'audience': 'To create an audience in Lytics:\n1. Go to Audiences in the Lytics platform\n2. Click "Create New Audience"\n3. Use the visual editor to define audience criteria\n4. Leverage Lytics\' machine learning for advanced segmentation\n5. Preview your audience\n6. Name and save your audience',
    'segment': 'To build a segment in Lytics:\n1. Access your Lytics account\n2. Navigate to Audiences > Create Audience\n3. Use the visual editor to define segment criteria\n4. Choose from behavioral, demographic, or custom fields\n5. Utilize Lytics\' AI-powered suggestions for segmentation\n6. Preview your segment\n7. Name and save your segment',
    'data integration': 'Lytics offers native integrations with many marketing and analytics tools. It can ingest data from various sources and export segments to different platforms.',
    'reporting': 'Lytics provides AI-driven insights and reporting. It offers features like content affinity reporting, user pathing analysis, and predictive analytics.',
    'privacy compliance': 'Lytics includes features for managing user consent and handling data subject access requests. It also provides tools for data governance and privacy compliance.'
  },
  zeotap: {
    'set up': 'To set up Zeotap:\n1. Create a Zeotap account\n2. Set up your organization profile\n3. Configure your data sources\n4. Set up your identity resolution rules\n5. Create your first audience segment',
    'integrate': 'To integrate your data with Zeotap:\n1. Log in to your Zeotap account\n2. Go to the Integrations section\n3. Select your data source type\n4. Follow the integration wizard for your specific source\n5. Map your data fields to Zeotap\'s universal schema\n6. Set up the data transfer method (API, SFTP, etc.)\n7. Validate and activate the integration',
    'audience': 'To create an audience in Zeotap:\n1. Access the Zeotap platform\n2. Go to the Audience Builder\n3. Define your audience using available attributes and behaviors\n4. Use AND/OR logic to combine multiple conditions\n5. Leverage first-party and third-party data for segmentation\n6. Preview your audience size\n7. Name and save your audience for activation',
    'segment': 'To build a segment in Zeotap:\n1. Log into your Zeotap account\n2. Navigate to the Audience Builder\n3. Use the visual interface to define segment criteria\n4. Combine various data points and behaviors\n5. Utilize Zeotap\'s deterministic identity resolution for accurate segmentation\n6. Preview your segment size\n7. Name and activate your segment',
    'data integration': 'Zeotap specializes in integrating and unifying customer data from multiple sources. It offers deterministic identity resolution to create a unified customer view.',
    'reporting': 'Zeotap provides analytics and reporting features, including audience insights, campaign performance tracking, and cross-channel attribution analysis.',
    'privacy compliance': 'Zeotap emphasizes privacy-by-design principles and offers tools for compliance with data protection regulations like GDPR and CCPA. It includes features for consent management and data subject rights.'
  }
};

export async function fetchDocumentation(cdp: string, query: string): Promise<string> {
  // Simulate network delay and processing time
  await new Promise(resolve => setTimeout(resolve, 500 + Math.random() * 1000));

  const cdpDocs = mockDocumentation[cdp.toLowerCase() as keyof CDPDocumentation] || {};
  const relevantInfo = Object.entries(cdpDocs).find(([key]) => 
    query.toLowerCase().includes(key.toLowerCase()) || key.toLowerCase().includes(query.toLowerCase())
  );

  if (relevantInfo) {
    return relevantInfo[1];
  }

  return `I couldn't find specific information about "${query}" in the ${cdp} documentation. Please check the official ${cdp} documentation for more details.`;
}

