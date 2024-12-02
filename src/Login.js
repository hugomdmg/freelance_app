const Login = () => {

    return (
      <div className="fixed w-full h-full flex flex-col items-center justify-center bg-[#d7e9e3] dark:bg-gray-900">
      <div className="bg-[#eaf1ef] dark:bg-gray-800 shadow-md rounded-lg p-8 max-w-sm w-full">
        <h2 className="text-2xl font-bold text-[#204051] dark:text-white mb-6 text-center">Login</h2>
        <form>
          {/* Campo de email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-[#204051] dark:text-gray-300 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 text-[#204051] dark:text-gray-200 bg-[#f5f7f6] dark:bg-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3c6e71] dark:focus:ring-blue-500 focus:border-transparent"
            />
          </div>
    
          {/* Campo de password */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-[#204051] dark:text-gray-300 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 text-[#204051] dark:text-gray-200 bg-[#f5f7f6] dark:bg-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3c6e71] dark:focus:ring-blue-500 focus:border-transparent"
            />
          </div>
    
          {/* Botón de login */}
          <a
            type="submit"
            className="w-full bg-[#3c6e71] hover:bg-[#2c5558] text-[#d7e9e3] font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3c6e71] focus:ring-opacity-50 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-500"
            href="/costumer-main"
          >
            Login
          </a>
        </form>
    
        {/* Enlace para registrarse */}
        <p className="text-center text-sm text-[#204051] dark:text-gray-400 mt-4">
          Don't have an account?{" "}
          <a
            href="#"
            className="text-[#3c6e71] hover:underline dark:text-blue-500"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
    
    );
  };
  
  export default Login;
  