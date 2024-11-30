const Sidebar = ({ isSidebarOpen }) => {
    return (
      <aside
        className={`fixed top-16 left-0 w-64 h-screen bg-gray-300 text-gray-800 transform transition-transform duration-300 ease-in-out z-10 dark:text-white dark:bg-gray-900 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="p-4 space-y-4">
          <a
            href="/"
            className="block py-2 px-4 rounded hover:bg-gray-700 dark:hover:bg-gray-600"
          >
            Dashboard
          </a>
          <a
            href="/"
            className="block py-2 px-4 rounded hover:bg-gray-700 dark:hover:bg-gray-600"
          >
            Backtest
          </a>
        </nav>
      </aside>
    );
  };
  
  export default Sidebar;
  