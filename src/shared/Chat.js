import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import API from '../infraestructure/api';

const Chat = ({ user1, user2 }) => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const { t } = useTranslation();
  const api = new API();

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const send = { user1: user1, user2: user2 }
        const response = await api.post('/get-messages', send);
        if (response && response.data.messages) {
          setMessages(response.data.messages);
        }
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };
    const intervalId = setInterval(() => {
        fetchMessages();
    }, 1000);

    return () => clearInterval(intervalId);
  }, [user2]);

  const handleSendMessage = async () => {
    if (inputMessage.trim() !== '') {
      const data = {user1:user1, user2:user2, messages:[...messages, { owner: user1.email, message: inputMessage }]}
      setInputMessage('');
      await api.post('/send-message', data)
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col bg-[#d7e9e3] dark:bg-gray-800 shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-[#204051] dark:text-gray-200 mb-4">Chat</h2>
      <div className="h-80 overflow-y-auto bg-[#eaf1ef] dark:bg-gray-700 rounded-md p-4 space-y-3 mb-4">
        {messages.length === 0 ? (
          <p className="text-[#9a3c3c] dark:text-gray-400 text-center">{t("chat.noMessage")}</p>
        ) : (
          messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.owner === user1.email ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs px-4 py-2 rounded-lg ${message.owner === user1.email
                  ? 'bg-[#3c6e71] text-[#d7e9e3]'
                  : 'bg-[#a3c4bc] text-[#204051] dark:bg-gray-600 dark:text-gray-200'
                  }`}
              >
                {message.message}
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
          onKeyDown={handleKeyPress}
          placeholder={t("chat.type")}
          className="flex-grow p-2 border rounded-lg bg-[#eaf1ef] border-[#a3c4bc] text-[#204051] dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3c6e71] dark:focus:ring-blue-500"
        />
        <button
          onClick={handleSendMessage}
          className="ml-2 px-4 py-2 bg-[#3c6e71] text-[#d7e9e3] rounded-lg hover:bg-[#2c5558] focus:outline-none dark:bg-blue-500 dark:hover:bg-blue-600"
        >
          {t("chat.send")}
        </button>
      </div>
    </div>

  );
};

export default Chat;
