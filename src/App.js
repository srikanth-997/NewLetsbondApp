import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import Verify from './pages/Verify';

import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Header from './layout/Header';
import LoginVerify from './pages/LoginVerify';
import Interest from './pages/Interest';
import UserDashBoard from './pages/UserDashBoard';
import { useState } from 'react';
import AddEvent from './pages/AddEvent';
import EventsScreen from './pages/EventsScreen'

function App() {

  return (
    <div className="App">
     <Router>

      <Header ></Header>
      <Routes>
        <Route exact path="/" element={<Login></Login>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/homePage" element={<Home></Home>}/>
        <Route exact path="/verify" element={<Verify></Verify>}/>
        <Route exact path="/loginVerify" element={<LoginVerify/>}/>
        <Route exact path="/interest" element={<Interest/>}/>
        <Route exact path="/userDashBoard" element={<UserDashBoard/>}/>
        <Route exact path='/addEvent' element={<AddEvent></AddEvent>}/>
        <Route exact path='/eventsScreen' element={<EventsScreen/>}/>
      </Routes>
      {/* <Home/> */}
      </Router>
      
    </div>
  );
}

export default App;
