import { useState, useEffect, useRef } from "react";

function ChatBot({ onClose }) {
  const [messages, setMessages] = useState([
    { id: 1, from: "bot", text: "Hello! How can I assist you today?" },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function handleSend() {
    if (!input.trim()) return;
    const userMessage = { id: Date.now(), from: "user", text: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        from: "bot",
        text: "I'm here to help! (This is a simulated response.)",
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 1000);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  return (
    <div className="fixed bottom-20 right-4 w-80 max-w-full bg-black bg-opacity-95 border border-white rounded-lg shadow-lg flex flex-col">
      <div className="flex justify-between items-center border-b border-white/30 px-4 py-2">
        <h2 className="text-white font-semibold text-lg">Chat with AI</h2>
        <button
          onClick={onClose}
          className="text-white hover:text-gray-400 focus:outline-none"
        >
          <i className="fas fa-times" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 max-h-72 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={msg.from === "bot" ? "text-left" : "text-right"}
          >
            <div
              className={
                msg.from === "bot"
                  ? "inline-block bg-gray-800 text-white rounded-tl-md rounded-tr-md rounded-br-md px-3 py-2 max-w-[80%]"
                  : "inline-block bg-white text-black rounded-tl-md rounded-tr-md rounded-bl-md px-3 py-2 max-w-[80%]"
              }
            >
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
        className="border-t border-white/30 px-4 py-3 flex items-center space-x-2"
      >
        <textarea
          rows={1}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type your message..."
          className="flex-1 resize-none rounded-md bg-gray-900 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900"
          style={{ maxHeight: "6rem" }}
        />
        <button
          type="submit"
          className="bg-white text-black rounded-md px-3 py-2 text-sm font-semibold hover:bg-gray-200 transition"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default ChatBot;
