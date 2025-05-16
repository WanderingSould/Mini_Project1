import { useState } from "react";

const FloatingAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  // Dummy AI response function
  const generateResponse = (userMessage) => {
    if (userMessage.toLowerCase().includes("hello")) {
      return "Hello! How can I assist you today?";
    }
    return "I'm still learning! Try asking something else.";
  };

  // Handle sending message
  const sendMessage = () => {
    if (!input.trim()) return;
    const userMessage = { sender: "user", text: input };
    const botMessage = { sender: "bot", text: generateResponse(input) };

    setMessages([...messages, userMessage, botMessage]);
    setInput(""); // Clear input after sending
  };

  return (
    <div className="fixed bottom-4 right-4 z-50"> 
    {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 text-white p-3 rounded-full shadow-lg"
      >
        💬
      </button>

      {/* Chat Panel */}
      {isOpen && (
        <div className="bg-white w-80 h-96 shadow-lg rounded-lg p-4 flex flex-col">
          <div className="flex-1 overflow-y-auto">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 my-1 rounded-md ${
                  msg.sender === "user" ? "bg-blue-500 text-white self-end" : "bg-gray-200 text-black"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input Box */}
          <div className="mt-2 flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 p-2 border rounded-md"
              placeholder="Type a message..."
            />
            <button onClick={sendMessage} className="bg-blue-600 text-white px-4 py-2 ml-2 rounded-md">
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingAssistant;
