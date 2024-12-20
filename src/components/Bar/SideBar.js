import { useAuth } from "../../infraestructure/AuthContext.js";
import { deleteNotification } from "../../services/notifications.js";

const Sidebar = ({ isSidebarOpen }) => {
  const { user, setUser } = useAuth();

 

  return (
    <aside
      className={`fixed top-16 left-0 w-64 h-screen bg-[#eaf1ef] text-[#204051] transform transition-transform duration-300 ease-in-out z-10 dark:text-white dark:bg-gray-900 ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <nav className="p-4 space-y-4">
        <p className="text-lg font-semibold">Notificaciones</p>
        <ul className="space-y-2">
          {user && user.notifications.map((notification) => (
            <li
              key={notification.id}
              className="flex justify-between items-center bg-white dark:bg-gray-800 p-2 rounded-md shadow-md hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <span>
                <strong>{notification.user}</strong>: {notification.type}
              </span>
              <button
                onClick={async () => setUser(await deleteNotification(user, notification.id))}
                className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-600"
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;

