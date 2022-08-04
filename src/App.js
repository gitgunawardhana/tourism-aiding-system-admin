import React from "react";
import './App.css';
import NavigationPanel from "./Components/NavigationPanel/NavigationPanel";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Configurations from "./Pages/Configurations/Configurations";
import Users from "./Pages/Users/Users";
import Vendors from "./Pages/Vendors/Vendors";
import SingleVendor from "./Pages/SingleVendor/SingleVendor";
import SingleAccommodation from "./Pages/Accommodations/SingleAccommodation";
import Locations from "./Pages/Locations/Locations";
import NewLocation from "./Pages/Locations/NewLocation";
import ViewSingleLocation from "./Pages/Locations/ViewSingleLocation";
import EditSingleLocation from "./Pages/Locations/EditSingleLocation";
import NewLocationAttraction from "./Pages/LocationAttraction/NewLocationAttraction";
import ViewLocationAttraction from "./Pages/LocationAttraction/ViewLocationAttraction";
import EditLocationAttraction from "./Pages/LocationAttraction/EditLocationAttraction";
import ScrollToTop from "./Components/ScrollToTop";
import VehicleTypes from "./Pages/Configurations/VehicleTypes/VehicleTypes";

function App() {
    return (
        <>
            <Router>
                <NavigationPanel/>
                <ScrollToTop/>
                <Routes>
                    <Route path='/' exact element={<Home/>}/>
                    <Route path='/users' element={<Users/>}/>
                    <Route path='/vendors' element={<Vendors/>}/>
                    <Route path='/vendor' element={<SingleVendor/>}/>
                    <Route path='/vendor' element={<SingleVendor/>}/>
                    <Route path='/accommodation' element={<SingleAccommodation/>}/>
                    <Route path='/locations' element={<Locations/>}/>
                    <Route path='/location/new' element={<NewLocation/>}/>
                    <Route path='/location/view/:id' element={<ViewSingleLocation/>}/>
                    <Route path='/location/edit/:id' element={<EditSingleLocation/>}/>
                    <Route path='/location/attraction/new' element={<NewLocationAttraction/>}/>
                    <Route path='/location/attraction/view' element={<ViewLocationAttraction/>}/>
                    <Route path='/location/attraction/edit' element={<EditLocationAttraction/>}/>
                    <Route path='/configurations' element={<Configurations/>}/>
                    <Route path='/configurations/vehicle-types' element={<VehicleTypes/>}/>
                </Routes>
            </Router>
        </>
    );
}

export default App;
