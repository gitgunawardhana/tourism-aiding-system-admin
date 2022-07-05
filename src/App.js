import React from "react";
import './App.css';
import NavigationPanel from "./Components/NavigationPanel/NavigationPanel";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Configurations from "./Pages/Configurations/Configurations";
import Users from "./Pages/Users/Users";
import Vendors from "./Pages/Vendors/Vendors";

function App() {
  return (
      <>
        <Router>
          <NavigationPanel/>
          <Routes>
            <Route path='/' exact element={<Home/>}/>
            <Route path='/configurations' element={<Configurations/>}/>
            <Route path='/users' element={<Users/>}/>
            <Route path='/vendors' element={<Vendors/>}/>
          </Routes>
        </Router>
      </>
  );
}

export default App;
