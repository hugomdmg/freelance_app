import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import API from '../infraestructure/api';
import Dates from '../shared/Calendar';
import Chat from '../shared/Chat';

const AdminMain = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const api = new API();

    const location = useLocation();
    const navigate = useNavigate();
    const user = location.state?.user;


    const [selectedCostumer, setSelectedCostumer] = useState()


    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const fetchedUsers = await api.get('/users');
                setUsers(fetchedUsers);
                setSelectedCostumer(fetchedUsers[2])

            } catch (err) {
                console.error("Error fetching users:", err);
                setError('Failed to fetch users');
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);


    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen bg-[#d7e9e3] dark:bg-gray-900">
                <p className="text-[#3c6e71] dark:text-white text-lg font-bold">
                    Loading users...
                </p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex items-center justify-center h-screen bg-[#d7e9e3] dark:bg-gray-900">
                <p className="text-red-500 text-lg font-bold">{error}</p>
            </div>
        );
    }

    if (users.length === 0) {
        return (
            <div className="flex items-center justify-center h-screen bg-[#d7e9e3] dark:bg-gray-900">
                <p className="text-[#3c6e71] dark:text-white text-lg font-bold">
                    No users found.
                </p>
            </div>
        );
    }

    return (
        <div className="flex p-4 bg-[#d7e9e3] dark:bg-gray-900 min-h-screen gap-4">
            <div className="flex-1 bg-[#eaf1ef] dark:bg-gray-800 shadow-md rounded-lg p-6">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold text-[#3c6e71] dark:text-gray-200">User List</h2>
                    <button className="bg-[#3c6e71] text-[#eaf1ef] font-bold py-2 px-4 rounded-lg hover:bg-[#2c5558] focus:outline-none focus:ring-2 focus:ring-[#3c6e71] dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-500 transition duration-200">
                        Añadir cliente
                    </button>
                </div>

                <table className="w-full border-collapse border border-[#a3c4bc] dark:border-gray-600">
                    <thead>
                        <tr className="bg-[#a3c4bc] dark:bg-gray-700 text-[#204051] dark:text-gray-300">
                            <th className="p-2 border border-[#a3c4bc] dark:border-gray-600 text-left">email</th>
                            <th className="p-2 border border-[#a3c4bc] dark:border-gray-600 text-left">Pending projects</th>
                            <th className="p-2 border border-[#a3c4bc] dark:border-gray-600 text-left">Total projects</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((costumer, index) => {
                            let total = 0
                            costumer.projects.forEach(project => {
                                if (project.status == 'Not Finished') {
                                    total++
                                }
                            });
                            return (
                                <tr
                                    key={index}
                                    className="even:bg-[#eaf1ef] dark:even:bg-gray-700 odd:bg-[#d7e9e3] dark:odd:bg-gray-800 hover:bg-[#c9dcd6] dark:hover:bg-gray-700"
                                    onClick={() => setSelectedCostumer(costumer)}

                                >
                                    <td className="p-2 border border-[#a3c4bc] dark:border-gray-600 text-[#204051] dark:text-gray-300">
                                        {costumer.email}
                                    </td>
                                    <td className="p-2 border border-[#a3c4bc] dark:border-gray-600 text-[#204051] dark:text-gray-300">
                                        {total}
                                    </td>
                                    <td className="p-2 border border-[#a3c4bc] dark:border-gray-600 text-[#204051] dark:text-gray-300">
                                        {costumer.projects.length}
                                    </td>
                                </tr>
                            )
                        }
                        )}
                    </tbody>
                </table>
            </div>
            <div className="flex bg-[#d7e9e3] dark:bg-gray-900 min-h-screen ">
                <div className="flex-1 bg-[#eaf1ef] dark:bg-gray-800 shadow-md rounded-lg p-6">
                    <Dates dates={['01/01/2025', '20/01/2025']} />
                    <Chat user1={user} user2={selectedCostumer} />
                    <p>{selectedCostumer.email}</p>
                </div>
            </div>
        </div>
    );
};

export default AdminMain;
