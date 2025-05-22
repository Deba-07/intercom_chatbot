import { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

const ChatSection = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = { type: 'user', text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
      const result = await model.generateContent(input);
      const text = await result.response.text();
      const botReply = { type: 'bot', text };
      setMessages((prev) => [...prev, botReply]);
    } catch (err) {
      console.error('Gemini error:', err);
      setMessages((prev) => [...prev, { type: 'bot', text: 'Sorry, something went wrong.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 p-3 space-y-2 overflow-y-auto">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`p-2 rounded max-w-[80%] ${
              msg.type === 'user' ? 'bg-blue-100 self-end' : 'bg-gray-200 self-start'
            }`}
          >
            {msg.text}
          </div>
        ))}
        {loading && <div className="text-sm text-gray-400">Gemini is typing...</div>}
      </div>
      <div className="p-2 border-t flex gap-2">
        <input
          className="flex-1 border rounded px-2 py-1"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Type a message..."
        />
        <button
          onClick={handleSend}
          className="bg-blue-500 text-white px-3 py-1 rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatSection;