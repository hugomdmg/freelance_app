import React, { useState } from "react";

const Introduction = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
        <div className="bg-white bg-opacity-90 dark:bg-gray-800 dark:bg-opacity-90 p-8 rounded shadow-2xl w-3/4 max-h-[90%] overflow-auto relative">
          <h2 className="text-4xl font-bold text-[#204051] dark:text-white mb-6 text-center">
            Bienvenido a mi Proyecto de Gestión de Clientes y Proyectos Web
          </h2>
          <div className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            <p className="mb-4">
              Esta es una página web diseñada para facilitar la colaboración
              entre clientes y programadores en el desarrollo de proyectos web.
              La aplicación ofrece funcionalidades específicas dependiendo del
              tipo de usuario:
            </p>
            <h3 className="text-2xl font-semibold text-[#204051] dark:text-white mb-3">
              Funciones para Clientes
            </h3>
            <ul className="list-disc list-inside mb-6">
              <li>Gestión de Proyectos: Administrar proyectos de páginas web, seguir avances y consultar el estado actual.</li>
              <li>Chat Integrado: Comunicación directa con el programador.</li>
              <li>Planificación de Reuniones: Herramienta para coordinar actividades con el programador.</li>
              <li>Seguimiento en Tiempo Real: Consultar actualizaciones sobre el proyecto.</li>
            </ul>
            <h3 className="text-2xl font-semibold text-[#204051] dark:text-white mb-3">
              Funciones para Programadores
            </h3>
            <ul className="list-disc list-inside mb-6">
              <li>Gestión de Clientes: Administrar una lista de clientes y sus proyectos.</li>
              <li>Chat Integrado: Comunicación fluida con los clientes.</li>
              <li>Notificaciones: Sistema para mantenerse actualizado sobre eventos importantes.</li>
            </ul>
            <h3 className="text-2xl font-semibold text-[#204051] dark:text-white mb-3">
              Tecnologías Utilizadas
            </h3>
            <ul className="list-disc list-inside mb-6">
              <li><strong>Frontend:</strong> React 18, React Hooks, Tailwind CSS, i18n.</li>
              <li><strong>Backend:</strong> Express, MongoDB.</li>
              <li><strong>Herramientas:</strong> Nodemon, Docker y Docker Compose.</li>
            </ul>
            <p>
              Este proyecto es un ejemplo de cómo integrar herramientas modernas
              y prácticas ágiles para construir aplicaciones web orientadas a
              la colaboración y la productividad. ¡Espero que lo disfrutes y te
              inspire a trabajar conmigo!
            </p>
          </div>
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400 transition duration-200 text-2xl"
          >
            ✖
          </button>
          <div className="flex justify-center">
            <button
              onClick={handleClose}
              className="bg-[#204051] text-white py-3 px-6 rounded-lg hover:bg-[#3c6e71] focus:outline-none focus:ring-2 focus:ring-[#3c6e71] transition duration-200"
            >
              Continuar
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default Introduction;
