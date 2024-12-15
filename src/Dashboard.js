import React from "react";
import { useTranslation } from "react-i18next";

const Dashboard = () => {
  const { t, i18n } = useTranslation();
  const backgroundImageUrl = 'images/people.jpg';
  
  // Styles for the background image and overlay
  const img = { 
    backgroundImage: `url(${backgroundImageUrl})`, 
    backgroundSize: 'cover', 
    backgroundPosition: 'center', 
    backgroundAttachment: 'fixed', 
  };
  
  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)', // Dark overlay with some transparency
    zIndex: 0, // Make sure it's behind the content
  };

  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen p-4"
      style={img}
    >
      {/* Overlay for transparency effect */}
      <div style={overlayStyle}></div>

      {/* Welcome section */}
      <div className="text-center mb-6 max-w-2xl text-gray-100 dark:text-white relative z-1">
        <h1 className="text-4xl font-bold">{t("welcome")}</h1>
        <p className="text-lg mt-4">
          Consigue la página web que necesitas para tu negocio, especializados en pequeñas y medianas empresas.
        </p>
      </div>

      {/* Pricing section */}
      <div className="text-center max-w-2xl relative z-1">
        <h3 className="text-3xl font-semibold text-gray-100 mb-4 dark:text-blue-300">
          Nuestros Servicios
        </h3>
        <p className="text-lg text-gray-100 dark:text-gray-300 mb-6">
          Ofrecemos tres rangos de precios según la complejidad del proyecto. Si tienes un negocio pequeño y necesitas una presencia online, ¡podemos ayudarte!
        </p>

        {/* Pricing table */}
        <table className="table-auto w-full mt-6 border-collapse border border-[#a3c4bc] dark:border-gray-600 text-left relative z-1">
          <thead>
            <tr className="bg-[#a3c4bc] dark:bg-gray-700 text-[#204051] dark:text-gray-300">
              <th className="p-3">Tipo de Proyecto</th>
              <th className="p-3">Precio</th>
              <th className="p-3">Descripción</th>
            </tr>
          </thead>
          <tbody>
            {/* Static Pages */}
            <tr className="even:bg-[#eaf1ef] dark:text-gray-300 dark:even:bg-gray-700 odd:bg-[#d7e9e3] dark:odd:bg-gray-800 hover:bg-[#c9dcd6] dark:hover:bg-gray-700">
              <td className="p-2">Páginas Estáticas</td>
              <td className="p-2">€300</td>
              <td className="p-2">Páginas simples que no requieren base de datos, ideales para negocios pequeños.</td>
            </tr>
            {/* Simple Pages */}
            <tr className="even:bg-[#eaf1ef] dark:text-gray-300 dark:even:bg-gray-700 odd:bg-[#d7e9e3] dark:odd:bg-gray-800 hover:bg-[#c9dcd6] dark:hover:bg-gray-700">
              <td className="p-2">Páginas Simples con Base de Datos</td>
              <td className="p-2">€600</td>
              <td className="p-2">Páginas con funcionalidades básicas como formularios de contacto y bases de datos para almacenamiento.</td>
            </tr>
            {/* Complex Pages */}
            <tr className="even:bg-[#eaf1ef] dark:text-gray-300 dark:even:bg-gray-700 odd:bg-[#d7e9e3] dark:odd:bg-gray-800 hover:bg-[#c9dcd6] dark:hover:bg-gray-700">
              <td className="p-2">Páginas Complejas</td>
              <td className="p-2">€1000+</td>
              <td className="p-2">Páginas web más avanzadas con funcionalidades personalizadas y bases de datos complejas.</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Contact and registration */}
      <div className="text-center max-w-2xl mt-8 relative z-1">
        <h3 className="text-3xl font-semibold text-gray-100 mb-4 dark:text-blue-300">¿Quieres más información?</h3>
        <p className="text-lg text-gray-100 dark:text-gray-300 mb-4">
          Puedes contactarnos directamente a través de <span className="font-semibold">info@tupagina.com</span> o registrarte en la web para obtener más detalles.
        </p>
        <div className="space-x-4">
          <button className="px-6 py-3 bg-[#3c6e71] text-[#d7e9e3] rounded-lg hover:bg-[#2c5558] dark:bg-green-600 dark:hover:bg-green-700">
            Contactar
          </button>
          <button className="px-6 py-3 bg-[#3c6e71] text-[#d7e9e3] rounded-lg hover:bg-[#2c5558] dark:bg-green-600 dark:hover:bg-green-700">
            Registrarse
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
