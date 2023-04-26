import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import Verify from './pages/Verify';

import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
     <Router>

      <Navbar></Navbar>
      <Routes>
        <Route exact path="/" element={<Login></Login>}/>
       
       <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/homePage" element={<Home></Home>}/>
        <Route exact path="/verify" element={<Verify></Verify>}/>
      </Routes>
      {/* <Home/> */}
      </Router>
    </div>
  );
}

export default App;
