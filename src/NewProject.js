import React, { useState } from "react";
import Dates from "./shared/Calendar";

const NewProject = () => {

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        cardNumber: "",
        expiryDate: "",
        cvv: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Datos enviados:", formData);
        alert("Pago procesado exitosamente!");
    };

    const selectedProject = {
        name: 'Project 1',
        status: 'Finished',
        link: 'https://main.d183snd9vhmvw3.amplifyapp.com/',
        dates: ['23/01/2025', '12/02/2025'], // Fechas como strings en formato dd/mm/yyyy
        missingPayment: 200,
        totalPaid: 300,
        trelloLink: '',
      }


    return (
        <div className="fixed w-full h-full flex flex-col items-center justify-center bg-[#eaf1ef] dark:bg-gray-900">
            <form onSubmit={handleSubmit} className="w-full y-full">
                {/* Nombre completo */}
                <div className="mb-4">
                    <label
                        htmlFor="fullName"
                        className="block text-[#204051] dark:text-gray-300 text-sm font-bold mb-2"
                    >
                        Nombre del Proyecto
                    </label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="Ingrese su nombre completo"
                        required
                        className="w-full px-3 py-2 text-[#204051] dark:text-gray-200 bg-[#f5f7f6] dark:bg-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3c6e71] dark:focus:ring-blue-500 focus:border-transparent"
                    />
                </div>

                {/* Correo electrónico */}
                <div className="mb-4">
                    <label
                        htmlFor="email"
                        className="block text-[#204051] dark:text-gray-300 text-sm font-bold mb-2"
                    >
                        Informacion
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Ingrese su correo electrónico"
                        required
                        className="w-full px-3 py-2 text-[#204051] dark:text-gray-200 bg-[#f5f7f6] dark:bg-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3c6e71] dark:focus:ring-blue-500 focus:border-transparent"
                    />
                </div>

                {/* Número de tarjeta */}

                {/* Fecha de expiración y CVV */}


                {/* Botón de pago */}
                <Dates selectedProject={selectedProject}/>
                <button
                    type="submit"
                    className="w-full bg-[#3c6e71] hover:bg-[#2c5558] text-[#d7e9e3] font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3c6e71] focus:ring-opacity-50 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-500"
                >
                    Realizar Pago
                </button>
            </form>
        </div>
    )
}

export default NewProject