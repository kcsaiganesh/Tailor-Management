import './App.css';
import Home from './components/Dashboard/home';
import Login from './components/login/login';
import Order from './components/order/order';
import Navbar from './components/Navigation/navbar';
import Market from './components/Market/market';
import Register from './components/register/register';
import {
  BrowserRouter as Router, 
  Route,
  Routes
} from 'react-router-dom';

function App() {
  return (
    <div className="App" class="h-auto overflow-y-scroll scrollbar-thumb-purple-400" >
      <Navbar/> 
     <Router>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/market' element={<Market/>} />
          <Route path='/order' element={<Order/>} />
      </Routes>
     </Router>
    </div>
  
  );
}

export default App;
