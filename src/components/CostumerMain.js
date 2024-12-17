import React, { useState, useEffect } from 'react';
import Chat from './shared/Chat';
import Dates from './shared/Calendar';
import ProjectsList from './shared/ProjectsList';
import ProjectDetails from './shared/ProjectDetails';
import { useNavigate, useLocation } from 'react-router-dom';

const CostumerMain = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [edit, setEdit] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null);
  const [user, setUser] = useState(location.state?.user);

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [user, navigate]);


  return (
    <div className="flex p-4 bg-[#d7e9e3] dark:bg-gray-900 min-h-screen gap-4">
      <div className="flex-1 bg-[#eaf1ef] dark:bg-gray-800 shadow-md rounded-lg p-6">
        {user?.projects && (
          <ProjectsList setSelectedProject={setSelectedProject} setEdit={setEdit} user={user} setUser={setUser} />
        )}
        {selectedProject && <ProjectDetails admin={false} user={user} setUser={setUser} setSelectedProject={setSelectedProject} selectedProject={selectedProject} edit={edit} setEdit={setEdit} />}
      </div>

      <div className="flex bg-[#d7e9e3] dark:bg-gray-900 min-h-screen ">
        <div className="flex-1 bg-[#eaf1ef] dark:bg-gray-800 shadow-md rounded-lg p-6">
          <Dates dates={selectedProject ? selectedProject.dates : []} />
          {user && <Chat user1={user} user2={{ email: process.env.REACT_APP_ADMIN }} />}
        </div>
      </div>
    </div>

  );
};

export default CostumerMain;

