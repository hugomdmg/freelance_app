import React from "react";
import { useTranslation } from "react-i18next";


const Dashboard = () => {
  const { t, i18n } = useTranslation();


  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100 dark:bg-gray-900">

        <div className="text-center mb-6 max-w-2xl text-gray-800 dark:text-white">
        <h1>{t("welcome")}</h1>

          <p className="text-lg">
            Consigue la página web que necesitas para tu negocio, especializados en pequeñas y medianas empresas.
          </p>
        </div>

        <div className="text-center max-w-2xl">
          <h3 className="text-2xl font-semibold text-blue-600 mb-3 dark:text-blue-300">
            Quiénes somos
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Buscamos acercar la tecnología con precios competitivos para ayudarte a crecer.
          </p>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

