import { useState } from 'react';
import ChatModel from './ChatModel';
import { MessageCircle } from 'lucide-react';

const ChatBotIcon = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-xl"
      >
        <MessageCircle />
      </button>
      {open && <ChatModel closeModal={() => setOpen(false)} />}
    </>
  );
};

export default ChatBotIcon;
