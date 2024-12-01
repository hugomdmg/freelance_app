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
    <div className="w-1/3 flex flex-col bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">Chat</h2>
          <div className="h-80 overflow-y-auto bg-gray-50 dark:bg-gray-700 rounded-md p-4 space-y-3 mb-4">
            {messages.length === 0 ? (
              <p className="text-gray-500 dark:text-gray-400 text-center">No messages yet.</p>
            ) : (
              messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.sender === 'You' ? 'justify-end' : 'justify-start'
                    }`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-lg ${message.sender === 'You'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-300 text-gray-800 dark:bg-gray-600 dark:text-gray-200'
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
              className="flex-grow p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleSendMessage}
              className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
            >
              Send
            </button>
          </div>
        </div>
  );
};

export default Chat;
