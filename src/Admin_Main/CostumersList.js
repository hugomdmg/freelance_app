const CostsumersList = ({ users, setSelectedCostumer }) => {

    return (
        <>
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-[#3c6e71] dark:text-gray-200">User List</h2>
                <button className="bg-[#3c6e71] text-[#eaf1ef] font-bold py-2 px-4 rounded-lg hover:bg-[#2c5558] focus:outline-none focus:ring-2 focus:ring-[#3c6e71] dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-500 transition duration-200">
                    Añadir cliente
                </button>
            </div>

            <table className="w-full border-collapse border border-[#a3c4bc] dark:border-gray-600">
                <thead>
                    <tr className="bg-[#a3c4bc] dark:bg-gray-700 text-[#204051] dark:text-gray-300">
                        <th className="p-2 border border-[#a3c4bc] dark:border-gray-600 text-left">email</th>
                        <th className="p-2 border border-[#a3c4bc] dark:border-gray-600 text-left">Pending projects</th>
                        <th className="p-2 border border-[#a3c4bc] dark:border-gray-600 text-left">Total projects</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((costumer, index) => {
                        if (costumer.roll !== 'admin') {
                            let total = 0
                            costumer.projects.forEach(project => {
                                if (project.status == 'Not Finished') {
                                    total++
                                }
                            });
                            return (
                                <tr
                                    key={index}
                                    className="even:bg-[#eaf1ef] dark:even:bg-gray-700 odd:bg-[#d7e9e3] dark:odd:bg-gray-800 hover:bg-[#c9dcd6] dark:hover:bg-gray-700"
                                    onClick={() => setSelectedCostumer(costumer)}

                                >
                                    <td className="p-2 border border-[#a3c4bc] dark:border-gray-600 text-[#204051] dark:text-gray-300">
                                        {costumer.email}
                                    </td>
                                    <td className="p-2 border border-[#a3c4bc] dark:border-gray-600 text-[#204051] dark:text-gray-300">
                                        {total}
                                    </td>
                                    <td className="p-2 border border-[#a3c4bc] dark:border-gray-600 text-[#204051] dark:text-gray-300">
                                        {costumer.projects.length}
                                    </td>
                                </tr>
                            )
                        }
                    }
                    )}
                </tbody>
            </table>
        </>
    )
}

export default CostsumersList