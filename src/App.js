import Dashboard from './components/Dashboard';
import Login from './components/Login';
import NavBar from './components/Bar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CostumerMain from './components/CostumerMain';
import "./components/Bar/i18n";
import PaymentPage from './components/Payment';
import AdminMain from './components/Admin_Main/AdminMain'
import Signup from './components/Singup';
import { useState } from 'react';

function App() {
const [user, setUser] = useState(null)

  return (
    <div>
      <BrowserRouter>
        <NavBar user={user}/>
        <div className="App pt-16">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path='/login' element={<Login setUser={setUser}/>} />
            <Route path='/costumer-main' element={<CostumerMain />} />
            <Route path='/payment' element={<PaymentPage />} />
            <Route path='/admin-main' element={<AdminMain />} />
            <Route path='/signup' element={<Signup />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div >
  );
}

export default App;
