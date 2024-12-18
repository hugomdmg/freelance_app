import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../infraestructure/AuthContext';
import Languages from './Languages';
import DarkLightMode from './DarkLightMode';
import Sidebar from './SideBar';

const NavBar = () => {
    const { user, logout } = useAuth();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const navigate = useNavigate();

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const goToProfile = () => {
        if (user.roll === "admin") {
            navigate('/admin-main');
        }
        if (user.roll === 'costumer') {
            navigate('/costumer-main');
        }
    };

    const goToAccount = () => {
        navigate('/account');
    };

    const handleMouseLeave = () => {
        setDropdownOpen(false); // Cerrar el desplegable cuando el ratón sale
    };

    return (
        <>
            <nav className="px-4 flex justify-between fixed w-full bg-[#3c6e71] py-3 shadow-md dark:bg-gray-800 dark:text-white z-10">
                {/* Logo y menú lateral */}
                <div className="hidden md:flex space-x-4 items-center">
                    {user && (
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
                    )}
                    <a
                        href="/"
                        className="text-2xl font-bold text-[#d7e9e3] hover:text-[#2c5558] dark:text-white dark:hover:text-gray-400"
                    >
                        YourSite
                    </a>
                </div>

                {/* Botones de idioma y modo oscuro */}
                <div className="hidden md:flex space-x-4 items-center">
                    <Languages />
                    <DarkLightMode />
                    {user ? (
                        <div
                            className="relative"
                        >
                            <button
                                onClick={toggleDropdown}
                                className="px-4 py-2 rounded-md bg-[#204051] text-[#d7e9e3] hover:bg-[#2c5558] dark:bg-gray-500 dark:text-black dark:hover:bg-gray-400"
                            >
                                {user.email}
                            </button>

                            {dropdownOpen && (
                                <div className="absolute right-0 mt-2 bg-white dark:bg-gray-700 rounded-md shadow-lg"
                                    onMouseLeave={handleMouseLeave} // Cerrar el desplegable cuando el ratón sale
                                >
                                    <ul className="py-1">
                                        <li>
                                            <button
                                                onClick={goToProfile}
                                                className="flex items-center px-4 py-2 text-sm text-[#204051] dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600"
                                            >
                                                {/* Icono para 'Profile' */}
                                                <svg
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                    className="w-5 h-5 mr-2"
                                                >
                                                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.21 0-6 1.79-6 4v1h12v-1c0-2.21-3.79-4-6-4z" />
                                                </svg>
                                                Profile
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                onClick={goToAccount}
                                                className="flex items-center px-4 py-2 text-sm text-[#204051] dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600"
                                            >
                                                {/* Icono para 'Account' */}
                                                <svg
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                    className="w-5 h-5 mr-2"
                                                >
                                                    <path d="M19 3h-4v2h3v12h-3v2h4c1.1 0 2-.9 2-2v-12c0-1.1-.9-2-2-2zM5 3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v-2h-3v-12h3v-2h-4z" />
                                                </svg>
                                                Account
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                onClick={logout}
                                                className="flex items-center px-4 py-2 text-sm text-[#204051] dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600"
                                            >
                                                {/* Icono para 'Log Out' */}
                                                <svg
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                    className="w-5 h-5 mr-2"
                                                >
                                                    <path d="M12 2c1.1 0 2 .9 2 2v4h5v2h-7v7h-2v-7h-7v-2h5v-4c0-1.1.9-2 2-2z" />
                                                </svg>
                                                Log out
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    ) : (
                        <a
                            href="/login"
                            className="px-4 py-2 rounded-md bg-[#204051] text-[#d7e9e3] hover:bg-[#2c5558] dark:bg-gray-500 dark:text-black dark:hover:bg-gray-400"
                        >
                            Log in
                        </a>
                    )}
                </div>
            </nav>

            <Sidebar isSidebarOpen={isSidebarOpen} />
        </>
    );
};

export default NavBar;
