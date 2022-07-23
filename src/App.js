import React from "react";
import './App.css';
import NavigationPanel from "./Components/NavigationPanel/NavigationPanel";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Configurations from "./Pages/Configurations/Configurations";
import Users from "./Pages/Users/Users";
import Vendors from "./Pages/Vendors/Vendors";
import SingleVendor from "./Pages/SingleVendor/SingleVendor";
import SingleAccommodation from "./Pages/SingleAccommodation/SingleAccommodation";
import NewAccommodation from "./Pages/NewAccommodation/NewAccommodation";

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
                    <Route path='/vendor' element={<SingleVendor/>}/>
                    <Route path='/vendor' element={<SingleVendor/>}/>
                    <Route path='/accommodation' element={<SingleAccommodation/>}/>
                    <Route path='/accommodation/:action' element={<SingleAccommodation/>}/>
                    <Route path='/accommodation/new' element={<NewAccommodation/>}/>
                </Routes>
            </Router>
        </>
    );
}

export default App;
