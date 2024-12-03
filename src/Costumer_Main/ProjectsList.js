
const ProjectsList = ({setSelectedProject, projects}) => {


    return (
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
    )
}

export default ProjectsList