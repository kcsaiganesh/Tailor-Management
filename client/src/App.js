import './App.css';
import Home from './components/Dashboard/home';
import Login from './components/login/login';
import WomenOrder from './components/order/women';
import MenOrder from './components/order/men';
import Order from './components/order/order';
import Navbar from './components/Navigation/navbar';
import Admin from './components/adminpages/adminpage';
import Register from './components/register/register';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';

function App() {



  return (
    <div className="App" class="h-auto " >
      <Navbar />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/order' element={<Order />} />
          <Route path='/women' element={<WomenOrder />} />
          <Route path='/men' element={<MenOrder />} />


          <Route
            path="*"
            element={<Navigate to="/" replace />}
          />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
