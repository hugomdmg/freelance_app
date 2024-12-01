import React, { useState } from 'react';
import Chat from './Chat';
import 'react-calendar/dist/Calendar.css'; // Importar estilos predeterminados del calendario
import Dates from './Calendar'

const CostumerMain = () => {
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
      {/* Contenedor principal */}
      <div className="flex p-8 bg-gray-100 dark:bg-gray-900 space-x-8">
        {/* Lista de proyectos */}
        <div className="flex-1 bg-white dark:bg-gray-800 shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">Project List</h2>
          <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
            <thead>
              <tr className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                <th className="p-2 border border-gray-300 dark:border-gray-600 text-left">Project Name</th>
                <th className="p-2 border border-gray-300 dark:border-gray-600 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project, index) => (
                <tr
                  key={index}
                  className="cursor-pointer even:bg-gray-100 dark:even:bg-gray-700 odd:bg-white dark:odd:bg-gray-800 hover:bg-blue-50 dark:hover:bg-blue-700"
                  onClick={() => setSelectedProject(project)}
                >
                  <td className="p-2 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-300">
                    {project.name}
                  </td>
                  <td
                    className={`p-2 border border-gray-300 dark:border-gray-600 text-sm font-semibold ${project.status === 'Finished'
                      ? 'text-green-600 dark:text-green-400'
                      : 'text-red-600 dark:text-red-400'
                      }`}
                  >
                    {project.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex mt-4">
            <a
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-200">
              Nuevo Proyecto
            </a>
          </div>
        </div>

        {/* Chat */}
        <Chat />
      </div>

      {/* Detalles del proyecto seleccionado */}
      <div className="flex p-8 bg-gray-100 dark:bg-gray-900 space-x-8">
        <div className="flex-1 bg-white dark:bg-gray-800 shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            {selectedProject.name}
          </h2>
          <ul className="space-y-2">
            <li>
              <span className="font-semibold">Production Link: </span>
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                {selectedProject.link}
              </a>
            </li>
            <li>
              <span className="font-semibold">Next Meeting: </span>
              {selectedProject.dates[0]}
            </li>
            <li>
              <span className="font-semibold">Pending Payments: </span>
              ${selectedProject.missingPayment}{' '}
              <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                Make Payment
              </button>
            </li>
            <li>
              <span className="font-semibold">Total Paid: </span>${selectedProject.totalPaid}
            </li>
            <li>
              <span className="font-semibold">Trello Link: </span>
              {selectedProject.trelloLink ? (
                <a
                  href={selectedProject.trelloLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  {selectedProject.trelloLink}
                </a>
              ) : (
                <span className="text-gray-500">No Trello Link</span>
              )}
            </li>
          </ul>
        </div>
        <Dates selectedProject={selectedProject}/>
      </div>

    </>
  );
};

export default CostumerMain;
