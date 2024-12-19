import API from './api'

const api = new API();


export const fetchUsers = async (setUsers, setLoading) => {
    try {
        setUsers(await api.get('/users'));
    } catch (err) {
        console.error("Error fetching users:", err);
    } finally {
        setLoading(false);
    }
};