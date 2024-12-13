import React, { useState, useEffect } from 'react';
import Chat from '../shared/Chat';
import Dates from '../shared/Calendar'
import ProjectsList from './ProjectsList'
import ProjectDetails from './ProjectDetails'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const CostumerMain = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const user = location.state?.user
  console.log('costumermian', user)

  useEffect(() => {
    if (!user) {
      navigate('/')
    }
  }, [])

  const projects = [
    {
      name: 'Project 1',
      status: 'Finished',
      link: 'https://main.d183snd9vhmvw3.amplifyapp.com/',
      dates: ['23/01/2025', '12/02/2025'], // Fechas como strings en formato dd/mm/yyyy
      missingPayment: 200,
      totalPaid: 300,
      trelloLink: '',
    },
    {
      name: 'Project 2',
      status: 'Not Finished',
      link: 'https://main.d183snd9vhmvw3.amplifyapp.com/',
      dates: ['05/12/2024', '15/04/2025'],
      missingPayment: 6600,
      totalPaid: 300,
      trelloLink: '',
    },
    {
      name: 'Project 3',
      status: 'Finished',
      link: 'https://main.d183snd9vhmvw3.amplifyapp.com/',
      dates: ['01/05/2025', '20/06/2025'],
      missingPayment: 200,
      totalPaid: 300,
      trelloLink: '',
    },
  ];

  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <>
      <div className="flex p-8 bg-[#f4f4f2] dark:bg-gray-900 space-x-8">
        <ProjectsList setSelectedProject={setSelectedProject} projects={projects} />
        <Chat />
      </div>

      <div className="flex p-8 bg-[#f4f4f2] dark:bg-gray-900 space-x-8">
        <ProjectDetails selectedProject={selectedProject} />
        <Dates selectedProject={selectedProject} />
      </div>
    </>
  );
};

export default CostumerMain;
