import { useEffect, useState } from 'react';
import API from '../../services/api';
import Dates from '../shared/Calendar';
import Chat from '../shared/Chat';
import ProjectsList from '../shared/ProjectsList';
import CostsumersList from './CostumersList';
import ProjectDetails from '../shared/ProjectDetails';
import { useAuth } from '../../infraestructure/AuthContext';
import { useNavigate } from 'react-router-dom';

const AdminMain = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const api = new API();

    const [costumers, setCostumers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [edit, setEdit] = useState(false);
    const [selectedCostumer, setSelectedCostumer] = useState(null);
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        if (!user || user.roll !== "admin") {
            navigate('/login');
        }
        const fetchUsers = async () => {
            try {
                setCostumers(await api.get('/users'));
            } catch (err) {
                console.error("Error fetching users:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, [user, navigate, selectedCostumer]);

    return (
        <div className="flex p-4 bg-[#d7e9e3] dark:bg-gray-900 min-h-screen gap-4">
            <div className="flex-1 bg-[#eaf1ef] dark:bg-gray-800 shadow-md rounded-lg p-6">
                <CostsumersList users={costumers} setSelectedCostumer={setSelectedCostumer} />
                {selectedCostumer && (
                    <ProjectsList
                        admin={true}
                        setSelectedProject={setSelectedProject}
                        setEdit={setEdit}
                        user={selectedCostumer}
                        setUser={setSelectedCostumer}
                    />
                )}
                {selectedProject && (
                    <ProjectDetails
                        admin={true}
                        user={selectedCostumer}
                        setUser={setSelectedCostumer}
                        setSelectedProject={setSelectedProject}
                        selectedProject={selectedProject}
                        edit={edit}
                        setEdit={setEdit}
                    />
                )}
            </div>
            <div className="flex bg-[#d7e9e3] dark:bg-gray-900 min-h-screen ">
                <div className="flex-1 bg-[#eaf1ef] dark:bg-gray-800 shadow-md rounded-lg p-6">
                    <Dates dates={selectedProject ? selectedProject.dates : []} />
                    {user && selectedCostumer && (
                        <Chat user1={user} user2={selectedCostumer} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdminMain;

