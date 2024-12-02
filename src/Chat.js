import React, { useState } from 'react';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  // Maneja el envío de mensajes
  const handleSendMessage = () => {
    if (inputMessage.trim() !== '') {
      setMessages([...messages, { text: inputMessage, sender: 'You' }]);
      setInputMessage('');
    }
  };

  // Maneja el envío con la tecla Enter
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="w-1/3 flex flex-col bg-[#d7e9e3] dark:bg-gray-800 shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold text-[#204051] dark:text-gray-200 mb-4">Chat</h2>
      <div className="h-80 overflow-y-auto bg-[#eaf1ef] dark:bg-gray-700 rounded-md p-4 space-y-3 mb-4">
        {messages.length === 0 ? (
          <p className="text-[#9a3c3c] dark:text-gray-400 text-center">No messages yet.</p>
        ) : (
          messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.sender === 'You' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs px-4 py-2 rounded-lg ${message.sender === 'You'
                  ? 'bg-[#3c6e71] text-[#d7e9e3]'
                  : 'bg-[#a3c4bc] text-[#204051] dark:bg-gray-600 dark:text-gray-200'
                  }`}
              >
                {message.text}
              </div>
            </div>
          ))
        )}
      </div>
      <div className="flex items-center">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your message..."
          className="flex-grow p-2 border rounded-lg bg-[#eaf1ef] border-[#a3c4bc] text-[#204051] dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3c6e71] dark:focus:ring-blue-500"
        />
        <button
          onClick={handleSendMessage}
          className="ml-2 px-4 py-2 bg-[#3c6e71] text-[#d7e9e3] rounded-lg hover:bg-[#2c5558] focus:outline-none dark:bg-blue-500 dark:hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>

  );
};

export default Chat;
