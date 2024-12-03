import React, { useState, useEffect } from "react";
import Sidebar from "./SideBar";
import Languages from "./Languages";
import DarkLightMode from "./DarkLightMode";

const NavBar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <nav className="px-4 flex justify-between fixed w-full bg-[#3c6e71] py-3 shadow-md dark:bg-gray-800 dark:text-white z-10">
                {/* Logo y menú lateral */}
                <div className="hidden md:flex space-x-4 items-center">
                    <button onClick={toggleSidebar} aria-label="Toggle menu">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 text-[#d7e9e3] dark:text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                    <a
                        href="/"
                        className="text-2xl font-bold text-[#d7e9e3] hover:text-[#2c5558] dark:text-white dark:hover:text-gray-400"
                    >
                        Logo
                    </a>
                </div>

                {/* Botones de login y modo oscuro */}
                <div className="hidden md:flex space-x-4 items-center">
                    <Languages/>
                    <DarkLightMode/>
                    <a
                        href="/login"
                        className="px-4 py-2 rounded-md bg-[#204051] text-[#d7e9e3] hover:bg-[#2c5558] dark:bg-gray-500 dark:text-black dark:hover:bg-gray-400"
                    >
                        Log in
                    </a>
                </div>
            </nav>
            <Sidebar isSidebarOpen={isSidebarOpen} />
        </>
    );
};

export default NavBar;

