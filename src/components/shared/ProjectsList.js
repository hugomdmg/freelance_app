import API from "../../infraestructure/api";
import { useTranslation } from 'react-i18next';
import Loading from "./Loading";
import { useState } from "react";

const api = new API()

const ProjectsList = ({ setSelectedProject, setEdit, user, setUser }) => {
    const { t } = useTranslation()
    const [loading, setLoading] = useState(false)
    const deleteProject = async (project) => {
        setLoading(true)
        const data = { project: project, email: user.email }
        const res = await api.post('/delete-project', data)
        setUser(res.data)
        setLoading(false)
    }

    const createProject = async () => {
        const res = await api.post('/create-project', user)
        setUser(res.data)
    }

    const changeStatus = (project) => {
        const index = user.projects.findIndex(n => n.id === project.id);

        if (index !== -1) {
            const updatedProjects = [...user.projects];
            const status = (updatedProjects[index].status == 'Finished') ? 'Not Finished' : 'Finished'
            updatedProjects[index] = { ...updatedProjects[index], status: status };
            setUser({ ...user, projects: updatedProjects });
        }
    };

    return (
        <div className="flex-1 bg-[#d7e9e3] dark:bg-gray-800 shadow-md rounded-lg p-8">
            <h2 className="text-2xl font-bold text-[#3c6e71] dark:text-gray-200 mb-4">{t("projectList.title")}</h2>
            <table className="w-full border-collapse border border-[#a3c4bc] dark:border-gray-600">
                <thead>
                    <tr className="bg-[#a3c4bc] dark:bg-gray-700 text-[#204051] dark:text-gray-300">
                        <th className="p-2 border border-[#a3c4bc] dark:border-gray-600 text-left">{t("projectList.projectName")}</th>
                        <th className="p-2 border border-[#a3c4bc] dark:border-gray-600 text-left">{t("projectList.status")}</th>
                    </tr>
                </thead>
                <tbody>
                    {user.projects.map((project, index) => (
                        <tr
                            key={index}
                            className={`cursor-pointer even:bg-[#eaf1ef] dark:even:bg-gray-700 odd:bg-[#d7e9e3] dark:odd:bg-gray-800 hover:bg-[#c9dcd6] dark:hover:bg-gray-700`}
                        >
                            <td className="p-2 border border-[#a3c4bc] dark:border-gray-600 text-[#204051] dark:text-gray-300 text-left align-middle">
                                {project.name}
                            </td>
                            <td className="p-2 border border-[#a3c4bc] dark:border-gray-600 text-left align-middle flex items-center justify-between space-x-2">
                                <button
                                    onClick={() => { changeStatus(project) }}
                                    className={`text-sm font-semibold ${project.status === 'Finished'
                                        ? 'text-[#3c6e71] dark:text-green-400'
                                        : 'text-[#9a3c3c] dark:text-red-400'
                                        }`}
                                >
                                    {project.status}
                                </button>
                                <div>
                                    <button
                                        className="px-3 py-1 text-sm text-white bg-green-500 hover:bg-blue-900 dark:bg-green-700 dark:hover:bg-blue-900 rounded-md"
                                        onClick={() => { setEdit(false); setSelectedProject(project) }}
                                    >
                                        <svg
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            className="w-4 h-4"
                                        >
                                            <path d="M12 4.5C7.305 4.5 3.305 7.362 1.5 12c1.805 4.638 5.805 7.5 10.5 7.5s8.695-2.862 10.5-7.5c-1.805-4.638-5.805-7.5-10.5-7.5zm0 2c3.545 0 6.805 2.038 8.5 5-1.695 2.962-4.955 5-8.5 5s-6.805-2.038-8.5-5c1.695-2.962 4.955-5 8.5-5zm0 2.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5z" />
                                        </svg>
                                    </button>

                                    <button
                                        className="px-3 py-1 text-sm text-white bg-yellow-500 hover:bg-blue-900 dark:bg-yellow-700 dark:hover:bg-blue-900 rounded-md"
                                        onClick={async () => { setEdit(true); setSelectedProject(project) }}
                                    >
                                        <svg
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            className="w-4 h-4"
                                        >
                                            <path d="M16.292 3.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-12 12a1 1 0 01-.293.207l-5 2a1 1 0 01-1.272-1.272l2-5a1 1 0 01.207-.293l12-12zM15 5.414L5.414 15 4 20l5-1.414L18.586 8 15 5.414zM19 4.414L17.586 3 20 5.414 19 4.414z" />
                                        </svg>
                                    </button>

                                    <button
                                        className="px-3 py-1 text-sm text-white bg-gray-900 hover:bg-red-900 dark:bg-red-900 dark:hover:bg-red-900 rounded-md"
                                        onClick={async () => { await deleteProject(project) }}
                                    >
                                        <svg
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            className="w-4 h-4"
                                        >
                                            <path d="M3 6h18M8 6V4a1 1 0 011-1h6a1 1 0 011 1v2m4 0v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6h16zm5-4H3v2h18V2z" />
                                        </svg>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>

            </table>
            <div className="flex mt-4">
                <button
                    className="h-10 px-4 py-2 bg-[#3c6e71] text-[#d7e9e3] rounded-lg hover:bg-[#2c5558] focus:outline-none focus:ring-2 focus:ring-[#a3c4bc] dark:bg-green-600 dark:text-white dark:hover:bg-green-700 transition duration-200"
                    onClick={async () => { setLoading(true); await createProject(); setLoading(false) }}
                >
                    {t("projectList.newProject")}
                </button>
                {loading && <Loading size={50} />}
            </div>
        </div>
    )
}

export default ProjectsList