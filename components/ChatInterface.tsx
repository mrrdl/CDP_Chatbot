import React from 'react';
import MessageList from './MessageList';
import InputArea from './InputArea';
import { Message } from '../types';
import { processUserInput } from '../services/nlpService';
import CDPComparison from './CDPComparison';

interface ChatInterfaceProps {
  messages: Message[];
  addMessage: (text: string | React.ReactNode, sender: 'user' | 'bot') => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  error: string | null;
  setError: (error: string | null) => void;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ 
  messages, 
  addMessage, 
  isLoading, 
  setIsLoading, 
  error, 
  setError,
}) => {
  const handleUserInput = async (input: string) => {
    addMessage(input, 'user');
    setIsLoading(true);
    setError(null);
    try {
      const result = await processUserInput(input);
      if (typeof result === 'string') {
        addMessage(result, 'bot');
      } else {
        addMessage(`Here's a comparison between ${result.cdp1} and ${result.cdp2} for ${result.feature}:`, 'bot');
        addMessage(<CDPComparison {...result} />, 'bot');
      }
    } catch (err) {
      const errorMessage = "I'm sorry, I encountered an unexpected error. Please try asking your question again or rephrase it.";
      addMessage(errorMessage, 'bot');
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[500px]">
      <div className="bg-yellow-100 p-2 mb-4 text-sm text-yellow-800 rounded">
        Disclaimer: This chatbot uses simulated data for demonstration purposes. In a production environment, it would fetch real-time data from official documentation.
      </div>
      <MessageList messages={messages} />
      {error && <div className="text-red-500 mb-2">{error}</div>}
      <InputArea onSendMessage={handleUserInput} isLoading={isLoading} />
    </div>
  );
};

export default ChatInterface;

