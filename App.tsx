import React, { useState } from 'react';
import ChatInterface from './components/ChatInterface';
import CDPComparison from './components/CDPComparison';
import { Message } from './types';

const App: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hello! I'm your CDP support chatbot. How can I help you today?", sender: 'bot' },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [comparisonData, setComparisonData] = useState<{ cdp1: string; cdp2: string; feature: string } | null>(null);

  const addMessage = (text: string, sender: 'user' | 'bot') => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { id: prevMessages.length + 1, text, sender },
    ]);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto w-full px-4 sm:px-0">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <h1 className="text-2xl font-semibold mb-4">CDP Support Chatbot</h1>
          <ChatInterface 
            messages={messages} 
            addMessage={addMessage} 
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            error={error}
            setError={setError}
            setComparisonData={setComparisonData}
          />
          {comparisonData && (
            <CDPComparison 
              cdp1={comparisonData.cdp1} 
              cdp2={comparisonData.cdp2} 
              feature={comparisonData.feature} 
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;

