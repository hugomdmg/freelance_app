import API from "../infraestructure/api";
import { useTranslation } from 'react-i18next';

const api = new API()

const ProjectDetails = ({ admin, user, setUser, setSelectedProject, selectedProject, edit, setEdit }) => {
    const {t} = useTranslation()

    const saveProject = async () => {
        const data = { project: selectedProject, email: user.email }
        const res = await api.post('/update-project', data)

        setUser(res.data)
        setEdit(false)
    }

    return (
        <div className="flex-1 bg-[#d7e9e3] dark:bg-gray-800 shadow-md rounded-lg p-8">
            {!edit ? (<h2 className="text-2xl font-bold text-[#3c6e71] dark:text-white mb-4">
                {selectedProject.name}
            </h2>) : (
                <input
                    type="text"
                    id="name"
                    value={selectedProject.name}
                    onChange={(e) => { setSelectedProject({ ...selectedProject, name: e.target.value }) }}
                    placeholder={selectedProject.name}
                    className="w-full px-3 py-2 text-[#204051] dark:text-gray-200 bg-[#f5f7f6] dark:bg-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3c6e71] dark:focus:ring-blue-500 focus:border-transparent"
                />
            )}
            <table className="w-full border-collapse border border-[#a3c4bc] dark:border-gray-600 text-left">
                <tbody>
                    <tr className="even:bg-[#eaf1ef] dark:even:bg-gray-700 odd:bg-[#d7e9e3] dark:odd:bg-gray-800">
                        <td className="p-2 border border-[#a3c4bc] dark:border-gray-600 font-semibold text-[#204051] dark:text-gray-300">
                            {t("projectDetails.productionLink")}
                        </td>
                        {!edit ? (
                            <td className="p-2 border border-[#a3c4bc] dark:border-gray-600">
                                <a
                                    href={selectedProject.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#3c6e71] dark:text-green-400 underline hover:text-[#2c5558] transition"
                                >
                                    {selectedProject.link}
                                </a>
                            </td>
                        ) : (
                            <td className="p-2 border border-[#a3c4bc] dark:border-gray-600">
                                <input
                                    type="text"
                                    id="link"
                                    value={selectedProject.link}
                                    onChange={(e) => { setSelectedProject({ ...selectedProject, link: e.target.value }) }}
                                    placeholder={selectedProject.link}
                                    className="w-full px-3 py-2 text-[#204051] dark:text-gray-200 bg-[#f5f7f6] dark:bg-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3c6e71] dark:focus:ring-blue-500 focus:border-transparent"
                                />
                            </td>
                        )}

                    </tr>
                    <tr className="even:bg-[#eaf1ef] dark:even:bg-gray-700 odd:bg-[#d7e9e3] dark:odd:bg-gray-800">
                        <td className="p-2 border border-[#a3c4bc] dark:border-gray-600 font-semibold text-[#204051] dark:text-gray-300">
                        {t("projectDetails.nextMeeting")}
                        </td>
                        {!edit ? (
                            <td className="p-2 border border-[#a3c4bc] dark:border-gray-600 dark:text-gray-200">
                                {selectedProject.dates[0]}
                            </td>
                        ) : (
                            <td className="p-2 border border-[#a3c4bc] dark:border-gray-600">
                                <input
                                    type="text"
                                    id="next-meeting"
                                    value={selectedProject.dates[0]}
                                    onChange={(e) => {
                                        const updatedDates = [...selectedProject.dates];
                                        updatedDates[0] = e.target.value;
                                        setSelectedProject({ ...selectedProject, dates: updatedDates });
                                    }}
                                    placeholder={selectedProject.dates[0]}
                                    className="w-full px-3 py-2 text-[#204051] dark:text-gray-200 bg-[#f5f7f6] dark:bg-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3c6e71] dark:focus:ring-blue-500 focus:border-transparent"
                                />
                            </td>
                        )}
                    </tr>
                    <tr className="even:bg-[#eaf1ef] dark:even:bg-gray-700 odd:bg-[#d7e9e3] dark:odd:bg-gray-800">
                        <td className="p-2 border border-[#a3c4bc] dark:border-gray-600 font-semibold text-[#204051] dark:text-gray-300">
                        {t("projectDetails.pendingPayment")}
                        </td>
                        {(!edit || !admin) ?
                            (
                                <td className="p-2 border border-[#a3c4bc] dark:border-gray-600 dark:text-gray-200">
                                    ${selectedProject.missingPayment}{' '}
                                    {!admin &&
                                        (<a
                                            className="ml-2 px-4 py-2 bg-[#3c6e71] text-[#d7e9e3] rounded-lg hover:bg-[#2c5558] dark:bg-blue-600 dark:hover:bg-blue-700 transition"
                                            href="/payment"
                                        >
                            {t("projectDetails.makePayment")}
                            </a>)}
                                </td>
                            )
                            :
                            (
                                <td className="p-2 border border-[#a3c4bc] dark:border-gray-600">
                                    <input
                                        type="text"
                                        id="payment"
                                        value={selectedProject.missingPayment || ''}
                                        onChange={(e) => { setSelectedProject({ ...selectedProject, missingPayment: e.target.value }) }}
                                        placeholder={selectedProject.trelloLink || 'Enter Trello Link'}
                                        className="w-full px-3 py-2 text-[#204051] dark:text-gray-200 bg-[#f5f7f6] dark:bg-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3c6e71] dark:focus:ring-blue-500 focus:border-transparent"
                                    />
                                </td>
                            )
                        }
                    </tr>
                    <tr className="even:bg-[#eaf1ef] dark:even:bg-gray-700 odd:bg-[#d7e9e3] dark:odd:bg-gray-800">
                        <td className="p-2 border border-[#a3c4bc] dark:border-gray-600 font-semibold text-[#204051] dark:text-gray-300">
                        {t("projectDetails.totalPaid")}
                        </td>
                        <td className="p-2 border border-[#a3c4bc] dark:border-gray-600 dark:text-gray-200">
                            ${selectedProject.totalPaid}
                        </td>
                    </tr>
                    <tr className="even:bg-[#eaf1ef] dark:even:bg-gray-700 odd:bg-[#d7e9e3] dark:odd:bg-gray-800">
                        <td className="p-2 border border-[#a3c4bc] dark:border-gray-600 font-semibold text-[#204051] dark:text-gray-300">
                        {t("projectDetails.trelloLink")}
                        </td>
                        {!edit ? (
                            <td className="p-2 border border-[#a3c4bc] dark:border-gray-600">
                                {selectedProject.trelloLink ? (
                                    <a
                                        href={selectedProject.trelloLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#3c6e71] dark:text-blue-400 underline hover:text-[#2c5558] dark:hover:text-blue-500 transition"
                                    >
                                        {selectedProject.trelloLink}
                                    </a>
                                ) : (
                                    <span className="text-[#2c5558] dark:text-green-500">
                                        No Trello Link
                                    </span>
                                )}
                            </td>
                        ) : (
                            <td className="p-2 border border-[#a3c4bc] dark:border-gray-600">
                                <input
                                    type="text"
                                    id="trello-link"
                                    value={selectedProject.trelloLink || ''}
                                    onChange={(e) => { setSelectedProject({ ...selectedProject, trelloLink: e.target.value }) }}
                                    placeholder={selectedProject.trelloLink || 'Enter Trello Link'}
                                    className="w-full px-3 py-2 text-[#204051] dark:text-gray-200 bg-[#f5f7f6] dark:bg-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3c6e71] dark:focus:ring-blue-500 focus:border-transparent"
                                />
                            </td>
                        )}
                    </tr>
                </tbody>
            </table>
            {edit && (
                <button
                    className="flex items-center px-4 py-2 bg-[#3c6e71] text-[#d7e9e3] rounded-lg hover:bg-[#2c5558] focus:outline-none focus:ring-2 focus:ring-[#a3c4bc] dark:bg-green-600 dark:text-white dark:hover:bg-green-700 transition duration-200"
                    onClick={async () => { saveProject() }}
                >
                    <svg
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-5 h-5 mr-2"
                    >
                        <path d="M17 3H7C5.895 3 5 3.895 5 5v14c0 1.105.895 2 2 2h10c1.105 0 2-.895 2-2V5c0-1.105-.895-2-2-2zm-5 16c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm3-10H8V6h7v3z" />
                    </svg>
                    Guardar
                </button>
            )}

        </div>
    );
};

export default ProjectDetails;

