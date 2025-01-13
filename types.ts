export interface Message {
  id: number;
  text: string | React.ReactNode;
  sender: 'user' | 'bot';
}

export interface CDPDocumentation {
  [cdp: string]: {
    [topic: string]: string;
  };
}


