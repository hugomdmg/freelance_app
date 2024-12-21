import React, { useState } from "react";
import Language from "./Bar/languages/Languages";
import DarkLightMode from "./Bar/DarkLightMode";
import { useTranslation } from "react-i18next";

const Introduction = () => {
  const { t } = useTranslation();
  const hasSeenIntroduction = localStorage.getItem("hasSeenIntroduction");
  const [isVisible, setIsVisible] = useState(!hasSeenIntroduction);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem("hasSeenIntroduction", "true");
  };

  return (
    isVisible && (
      <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
        <div className="bg-white bg-opacity-90 dark:bg-gray-800 dark:bg-opacity-90 p-8 rounded shadow-2xl w-3/4 max-h-[90%] overflow-auto relative">
          <div className="flex">
            <Language />
            <DarkLightMode />
          </div>
          <h2 className="text-4xl font-bold text-[#204051] dark:text-white mb-6 text-center">
            {t("introduction.title")}
          </h2>

          <div className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            <p className="mb-4">{t("introduction.description")}</p>
            <h3 className="text-2xl font-semibold text-[#204051] dark:text-white mb-3">
              {t("introduction.clientFeaturesTitle")}
            </h3>
            <ul className="list-disc list-inside mb-6">
              {t("introduction.clientFeatures", { returnObjects: true }).map(
                (feature, index) => (
                  <li key={index}>{feature}</li>
                )
              )}
            </ul>
            <h3 className="text-2xl font-semibold text-[#204051] dark:text-white mb-3">
              {t("introduction.programmerFeaturesTitle")}
            </h3>
            <ul className="list-disc list-inside mb-6">
              {t("introduction.programmerFeatures", { returnObjects: true }).map(
                (feature, index) => (
                  <li key={index}>{feature}</li>
                )
              )}
            </ul>
            <h3 className="text-2xl font-semibold text-[#204051] dark:text-white mb-3">
              {t("introduction.technologiesTitle")}
            </h3>
            <ul className="list-disc list-inside mb-6">
              {t("introduction.technologies", { returnObjects: true }).map(
                (tech, index) => (
                  <li key={index}>{tech}</li>
                )
              )}
            </ul>
            <p>{t("introduction.closing")}</p>
          </div>
          <button onClick={handleClose} className="absolute top-4 right-4">
            {t("introduction.closeButton")}
          </button>
          <div className="flex justify-center">
            <button
              onClick={handleClose}
              className="bg-[#204051] text-white py-3 px-6 rounded-lg hover:bg-[#3c6e71] focus:outline-none focus:ring-2 focus:ring-[#3c6e71] transition duration-200"
            >
              {t("introduction.continueButton")}
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default Introduction;
