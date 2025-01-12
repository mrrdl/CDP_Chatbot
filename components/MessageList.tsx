import React from 'react';
import { Message } from '../types';

interface MessageListProps {
  messages: Message[];
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  return (
    <div className="flex-1 overflow-y-auto mb-4">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`mb-2 p-2 rounded-lg ${
            message.sender === 'user' ? 'bg-blue-100 ml-auto' : 'bg-gray-100'
          } max-w-[70%]`}
        >
          {message.text}
        </div>
      ))}
    </div>
  );
};

export default MessageList;

