import { motion } from 'framer-motion';
import { useState } from 'react';
import ChatSection from './ChatSection';
import BottonTabs from './BottonTabs';
import HomeSection from './HomeSection';
import NewsSection from './NewsSection';

const ChatModal = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState('Home');

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      className="rounded-xl shadow-xl bg-white w-[370px] h-[520px] fixed bottom-20 right-8 z-50 flex flex-col overflow-hidden"
    >
      {/* Top Greeting */}
      <div className="bg-gradient-to-b from-black to-gray-800 text-white p-4">
        <h2 className="text-xl font-semibold">Hello there.</h2>
        <p className="text-sm text-gray-400">How can we help?</p>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        {activeTab === 'Home' && <HomeSection />}
        {activeTab === 'Messages' && <ChatSection />}
        {activeTab === 'News' && <NewsSection />}
        {activeTab === 'Help' && <div className="p-4 text-center text-gray-500">Support coming soon...</div>}
      </div>

      {/* Bottom Tabs */}
      <BottonTabs activeTab={activeTab} setActiveTab={setActiveTab} />
    </motion.div>
  );
};

export default ChatModal;