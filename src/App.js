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
import Locations from "./Pages/Locations/Locations";
import NewLocation from "./Pages/NewLocation/NewLocation";
import ViewSingleLocation from "./Pages/SingleLocation/ViewSingleLocation";
import EditSingleLocation from "./Pages/SingleLocation/EditSingleLocation";
import NewLocationAttraction from "./Pages/LocationAttraction/NewLocationAttraction";
import ViewLocationAttraction from "./Pages/LocationAttraction/ViewLocationAttraction";
import EditLocationAttraction from "./Pages/LocationAttraction/EditLocationAttraction";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
    return (
        <>
            <Router>
                <NavigationPanel/>
                <ScrollToTop/>
                <Routes>
                    <Route path='/' exact element={<Home/>}/>
                    <Route path='/configurations' element={<Configurations/>}/>
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
                </Routes>
            </Router>
        </>
    );
}

export default App;
