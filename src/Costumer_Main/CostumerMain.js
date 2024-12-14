import React, { useState, useEffect } from 'react';
import Chat from '../shared/Chat';
import Dates from '../shared/Calendar';
import ProjectsList from './ProjectsList';
import ProjectDetails from './ProjectDetails';
import { useNavigate, useLocation } from 'react-router-dom';
import API from '../infraestructure/api';

const CostumerMain = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const api = new API();

  // Obtener usuario desde el estado de la ubicación
  const user = location.state?.user;

  // Redirigir a la página principal si no hay usuario
  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [user, navigate]);

  // Inicializar el proyecto seleccionado con el primer proyecto del usuario
  const [selectedProject, setSelectedProject] = useState(user?.projects?.[0] || null);

  return (
    <div className="flex p-4 bg-[#d7e9e3] dark:bg-gray-900 min-h-screen gap-4">
      {/* Lista de Proyectos */}
      <div className="flex-1 bg-[#eaf1ef] dark:bg-gray-800 shadow-md rounded-lg p-6">
        {user?.projects && (
          <ProjectsList setSelectedProject={setSelectedProject} projects={user.projects} />
        )}
        {selectedProject && <ProjectDetails selectedProject={selectedProject} />}
      </div>

      {/* Fechas y Chat */}
      <div className="flex bg-[#d7e9e3] dark:bg-gray-900 min-h-screen ">
        <div className="flex-1 bg-[#eaf1ef] dark:bg-gray-800 shadow-md rounded-lg p-6">
          <Dates dates={['01/01/2025', '20/01/2025']} />
          {user && <Chat user1={user} user2={{ email: 'hugo' }} />}
        </div>
      </div>
    </div>

  );
};

export default CostumerMain;

