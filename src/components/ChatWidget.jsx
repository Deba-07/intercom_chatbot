import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import ChatModel from './ChatModel';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={() => setIsOpen(true)}
        className="bg-black text-white p-4 rounded-full shadow-lg hover:scale-105 transition"
      >
        <MessageCircle size={24} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-20 right-6 w-[380px] h-[580px] bg-white shadow-2xl rounded-xl overflow-hidden"
          >
            <div className="flex justify-end p-2 bg-gray-100">
              <button onClick={() => setIsOpen(false)} className="hover:text-red-600">
                <X size={20} />
              </button>
            </div>
            <ChatModel />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatWidget;
