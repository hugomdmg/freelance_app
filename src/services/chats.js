import API from "./api";
const api = new API()

export const getMessages = async (user1, user2) => {
    try {
        const send = { user1: user1, user2: user2 }
        const response = await api.post('/get-messages', send);
        if (response && response.data.messages) {
            return (response.data.messages);
        }
    } catch (error) {
        return []
    }
};

export const sendMessage = async (inputMessage, emailUser1, emailUser2) => {
    if (inputMessage !== '') {
        const data = { emailUser1, emailUser2, message: inputMessage }
        await api.post('/send-message', data)
    }
};