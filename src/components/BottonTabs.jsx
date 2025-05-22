import { Home, MessageSquare, HelpCircle, Newspaper } from 'lucide-react';

const BottonTabs = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { label: 'Home', icon: <Home size={18} /> },
    { label: 'Messages', icon: <MessageSquare size={18} /> },
    { label: 'Help', icon: <HelpCircle size={18} /> },
    { label: 'News', icon: <Newspaper size={18} /> },
  ];

  return (
    <div className="flex justify-around py-2 border-t bg-white">
      {tabs.map((tab) => (
        <button
          key={tab.label}
          onClick={() => setActiveTab(tab.label)}
          className={`flex flex-col items-center text-sm ${
            activeTab === tab.label ? 'text-black font-semibold' : 'text-gray-500'
          }`}
        >
          {tab.icon}
          <span>{tab.label}</span>
        </button>
      ))}
    </div>
  );
};

export default BottonTabs;
