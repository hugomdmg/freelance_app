import Dashboard from './Dashboard';
import Login from './Login';
import NavBar from './Bar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CostumerMain from './Costumer_Main/CostumerMain';
import "./Bar/i18n";
import PaymentPage from './Payment';
import AdminMain from './Admin_Main/AdminMain'
import Signup from './Singup';
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
