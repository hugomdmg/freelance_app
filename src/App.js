import Dashboard from './Dashboard';
import Login from './Login';
import NavBar from './Bar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CostumerMain from './Costumer_Main/CostumerMain';
import "./Bar/i18n";
import PaymentPage from './Payment';
import NewProject from './NewProject';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <div className="pt-16">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/costumer-main' element={<CostumerMain />} />
            <Route path='/payment' element={<PaymentPage />} />
            <Route path='/new-project' element={<NewProject />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div >
  );
}

export default App;
