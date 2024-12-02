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
      <div className="flex p-8 bg-[#f4f4f2] dark:bg-gray-900 space-x-8">
        {/* Lista de proyectos */}
        <div className="flex-1 bg-[#d7e9e3] dark:bg-gray-800 shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-bold text-[#3c6e71] dark:text-gray-200 mb-4">Project List</h2>
          <table className="w-full border-collapse border border-[#a3c4bc] dark:border-gray-600">
            <thead>
              <tr className="bg-[#a3c4bc] dark:bg-gray-700 text-[#204051] dark:text-gray-300">
                <th className="p-2 border border-[#a3c4bc] dark:border-gray-600 text-left">Project Name</th>
                <th className="p-2 border border-[#a3c4bc] dark:border-gray-600 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project, index) => (
                <tr
                  key={index}
                  className="cursor-pointer even:bg-[#eaf1ef] dark:even:bg-gray-700 odd:bg-[#d7e9e3] dark:odd:bg-gray-800 hover:bg-[#c9dcd6] dark:hover:bg-gray-700"
                  onClick={() => setSelectedProject(project)}
                >
                  <td className="p-2 border border-[#a3c4bc] dark:border-gray-600 text-[#204051] dark:text-gray-300">
                    {project.name}
                  </td>
                  <td
                    className={`p-2 border border-[#a3c4bc] dark:border-gray-600 text-sm font-semibold ${project.status === 'Finished'
                      ? 'text-[#3c6e71] dark:text-green-400'
                      : 'text-[#9a3c3c] dark:text-red-400'
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
              className="px-4 py-2 bg-[#3c6e71] text-[#d7e9e3] rounded-lg hover:bg-[#2c5558] focus:outline-none focus:ring-2 focus:ring-[#a3c4bc] dark:bg-green-600 dark:text-white dark:hover:bg-green-700 transition duration-200"
            >
              Nuevo Proyecto
            </a>
          </div>
        </div>
        <Chat />
      </div>

      {/* Detalles del proyecto seleccionado */}
      <div className="flex p-8 bg-[#f4f4f2] dark:bg-gray-900 space-x-8">
        <div className="flex-1 bg-[#d7e9e3] dark:bg-gray-800 shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-bold text-[#3c6e71] dark:text-gray-200 mb-4">
            {selectedProject.name}
          </h2>
          <table className="w-full border-collapse border border-[#a3c4bc] dark:border-gray-600 text-left">
            <tbody>
              <tr>
                <td className="p-2 border border-[#a3c4bc] dark:border-gray-600 font-semibold text-[#204051] dark:text-gray-300">
                  Production Link:
                </td>
                <td className="p-2 border border-[#a3c4bc] dark:border-gray-600">
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#3c6e71] dark:text-green-400 underline"
                  >
                    {selectedProject.link}
                  </a>
                </td>
              </tr>
              <tr>
                <td className="p-2 border border-[#a3c4bc] dark:border-gray-600 font-semibold text-[#204051] dark:text-gray-300">
                  Next Meeting:
                </td>
                <td className="p-2 border border-[#a3c4bc] dark:border-gray-600">
                  {selectedProject.dates[0]}
                </td>
              </tr>
              <tr>
                <td className="p-2 border border-[#a3c4bc] dark:border-gray-600 font-semibold text-[#204051] dark:text-gray-300">
                  Pending Payments:
                </td>
                <td className="p-2 border border-[#a3c4bc] dark:border-gray-600">
                  ${selectedProject.missingPayment}{' '}
                  <button className="ml-2 px-4 py-2 bg-[#3c6e71] text-[#d7e9e3] rounded-lg hover:bg-[#2c5558] dark:bg-green-600 dark:hover:bg-green-700">
                    Make Payment
                  </button>
                </td>
              </tr>
              <tr>
                <td className="p-2 border border-[#a3c4bc] dark:border-gray-600 font-semibold text-[#204051] dark:text-gray-300">
                  Total Paid:
                </td>
                <td className="p-2 border border-[#a3c4bc] dark:border-gray-600">
                  ${selectedProject.totalPaid}
                </td>
              </tr>
              <tr>
                <td className="p-2 border border-[#a3c4bc] dark:border-gray-600 font-semibold text-[#204051] dark:text-gray-300">
                  Trello Link:
                </td>
                <td className="p-2 border border-[#a3c4bc] dark:border-gray-600">
                  {selectedProject.trelloLink ? (
                    <a
                      href={selectedProject.trelloLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#3c6e71] dark:text-green-400 underline"
                    >
                      {selectedProject.trelloLink}
                    </a>
                  ) : (
                    <span className="text-[#2c5558] dark:text-green-500">No Trello Link</span>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Dates selectedProject={selectedProject} />
      </div>
    </>
  );
};

export default CostumerMain;
