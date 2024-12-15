import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import API from '../infraestructure/api';
import Dates from '../shared/Calendar';
import Chat from '../shared/Chat';
import ProjectsList from '../Costumer_Main/ProjectsList';
import CostsumersList from './CostumersList';
import ProjectDetails from '../Costumer_Main/ProjectDetails';

const AdminMain = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const api = new API();

    const location = useLocation();
    const user = location.state?.user;
    const [edit, setEdit] = useState(false)

    const [selectedCostumer, setSelectedCostumer] = useState(null)
    const [selectedProject, setSelectedProject] = useState(null)

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const fetchedUsers = await api.get('/users');
                setUsers(fetchedUsers);
            } catch (err) {
                console.error("Error fetching users:", err);
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

    return (
        <div className="flex p-4 bg-[#d7e9e3] dark:bg-gray-900 min-h-screen gap-4">
            <div className="flex-1 bg-[#eaf1ef] dark:bg-gray-800 shadow-md rounded-lg p-6">
                <CostsumersList users={users} setSelectedCostumer={setSelectedCostumer} />
                {selectedCostumer && (
                    <ProjectsList setSelectedProject={setSelectedProject} setEdit={setEdit} user={selectedCostumer} setUser={setSelectedCostumer} />
                )}
                {selectedProject &&
                    <ProjectDetails user={selectedCostumer} setUser={setSelectedCostumer} setSelectedProject={setSelectedProject} selectedProject={selectedProject} edit={edit} setEdit={setEdit} />}
            </div>
            <div className="flex bg-[#d7e9e3] dark:bg-gray-900 min-h-screen ">
                <div className="flex-1 bg-[#eaf1ef] dark:bg-gray-800 shadow-md rounded-lg p-6">
                    <Dates dates={['01/01/2025', '20/01/2025']} />
                    <Chat user1={user} user2={selectedCostumer} />
                </div>
            </div>
        </div>
    );
};

export default AdminMain;
