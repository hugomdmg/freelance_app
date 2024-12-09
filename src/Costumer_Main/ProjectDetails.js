const ProjectDetails = ({ selectedProject }) => {

    return (
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
                            <a className="ml-2 px-4 py-2 bg-[#3c6e71] text-[#d7e9e3] rounded-lg hover:bg-[#2c5558] dark:bg-green-600 dark:hover:bg-green-700"
                            href="/payment">
                                Make Payment
                            </a>
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
    )
}

export default ProjectDetails