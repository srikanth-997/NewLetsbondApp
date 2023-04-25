import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Home from './pages/Home';

import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
     <Router>

      <Navbar></Navbar>
      <Routes>
        <Route exact path="/" element={<Home></Home>}/>
        <Route exact path="/sendOtp" element={<Register/>}/>
        <Route exact path="/homePage" element={<Home></Home>}/>
      </Routes>
      {/* <Home/> */}
      </Router>
    </div>
  );
}

export default App;
