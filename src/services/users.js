import api from './api'


export const fetchUsers = async () => {
    try {
        const response = await api.get('/users');

        // Verificar si la respuesta contiene los datos esperados
        if (response) {
            return response; // Retornar la lista de usuarios
        } else {
            console.warn('No data found in response:', response);
            return []; // Retornar un array vacío si no hay datos
        }
    } catch (err) {
        console.error("Error fetching users:", err); // Log para la depuración
        return []; // Retornar un array vacío si ocurre un error
    }
};


export const login = async (email, password, authLogin) => {
    let response = await api.post('/login', { email, password });
    if (response.status === 200) {
        authLogin(response.data)
    }
    return response
};

export const signup = async (email, password) => {
    let response = await api.post('/register', { email, password });
    return response
};

export const updateAccount = async (prevEmail, email, password) => {
    let response = await api.post('/update-account', { prevEmail, email, password });
    return response
};


export const deleteAccount = async (email, password) => {
    let response = await api.post('/delete-account', { email, password });
    return response
};