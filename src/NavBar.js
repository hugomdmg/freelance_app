import React, { useState, useEffect } from "react";
import Sidebar from "./SideBar";

const NavBar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const toggleDarkMode = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);
        document.documentElement.classList.toggle("dark", newMode);
        localStorage.setItem("theme", newMode ? "dark" : "light");
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        setIsDarkMode(savedTheme === "dark");
        document.documentElement.classList.add(savedTheme);
    }, []);

    return (
        <>
            <nav
                class="px-4 flex justify-between fixed top-0 left-0 w-full bg-blue-600 text-white py-3 shadow-md dark:bg-gray-800 dark:text-white z-10"
            >
                <div className="hidden md:flex space-x-4 items-center">
                    <button
                        onClick={toggleSidebar}
                        aria-label="Toggle menu"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6"
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
                    <a href="/intro" className="text-2xl font-bold hover:text-blue-200">
                        Logo
                    </a>
                </div>
                <div className="hidden md:flex space-x-4 items-center">
                    <a href="/login" className="px-4 py-2 rounded-md bg-blue-700 text-white dark:bg-gray-500 dark:text-black focus:outline-none hover:bg-blue-500 dark:hover:bg-gray-400"
                    >
                        Log in
                    </a>
                    <button
                        onClick={toggleDarkMode}
                        className="px-4 py-2 rounded-md bg-blue-700 text-white dark:bg-gray-500 dark:text-black focus:outline-none hover:bg-blue-500 dark:hover:bg-gray-400"
                    >
                        {isDarkMode ? "☀️" : "🌙"}
                    </button>
                </div>
            </nav>
            <Sidebar isSidebarOpen={isSidebarOpen} />
        </>
    );
};

export default NavBar;

