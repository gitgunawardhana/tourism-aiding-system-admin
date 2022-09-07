import React from "react";
import './App.css';
import NavigationPanel from "./Components/NavigationPanel/NavigationPanel";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Configurations from "./Pages/Configurations/Configurations";
import Users from "./Pages/Users/Users";
import Vendors from "./Pages/Vendors/Vendors";
import SingleVendor from "./Pages/Vendors/SingleVendor";
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
import AccommodationTypes from "./Pages/Configurations/AccommodationTypes/AccommodationTypes";
import RoomFacilities from "./Pages/Configurations/RoomFacilities/RoomFacilities";
import BathroomFacilities from "./Pages/Configurations/BathroomFacilities/BathroomFacilities";
import Provinces from "./Pages/Configurations/Provinces/Provinces";
import LocationActivities from "./Pages/Configurations/LocationActivities/LocationActivities";
import DriverFare from "./Pages/Configurations/DriverFare/DriverFare";
import EditDriverFare from "./Pages/Configurations/DriverFare/EditDriverFare";
import SingleUser from "./Pages/Users/SingleUser";
import SingleAccommodationReservation from "./Pages/Users/UserAccommodationReservations/SingleAccommodationReservation";
import SingleVehicleReservation from "./Pages/Users/UserVehicleReservations/SingleVehicleReservation";
import Login from "./Pages/Login/Login";

function setToken(userToken) {
    sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken !== null;
}

function App() {

    const token = getToken();

    if (!token) {
        return <Login setToken={setToken}/>
    }

    return (
        <>
            <Router>
                <NavigationPanel/>
                <ScrollToTop/>
                <Routes>
                    <Route path='/' exact element={<Home/>}/>
                    <Route path='/users' element={<Users/>}/>
                    <Route path='/user/:id' element={<SingleUser/>}/>
                    <Route path='/user/accommodation-reservation' element={<SingleAccommodationReservation/>}/>
                    <Route path='/user/vehicle-reservation' element={<SingleVehicleReservation/>}/>
                    <Route path='/vendors' element={<Vendors/>}/>
                    <Route path='/vendor' element={<SingleVendor/>}/>
                    <Route path='/accommodation' element={<SingleAccommodation/>}/>
                    <Route path='/locations' element={<Locations/>}/>
                    <Route path='/location/new' element={<NewLocation/>}/>
                    <Route path='/location/view/:id' element={<ViewSingleLocation/>}/>
                    <Route path='/location/edit/:id' element={<EditSingleLocation/>}/>
                    <Route path='/location/attraction/new/:locationId' element={<NewLocationAttraction/>}/>
                    <Route path='/location/attraction/view/:id' element={<ViewLocationAttraction/>}/>
                    <Route path='/location/attraction/edit/:id' element={<EditLocationAttraction/>}/>
                    <Route path='/configurations' element={<Configurations/>}/>
                    <Route path='/configurations/vehicle-types' element={<VehicleTypes/>}/>
                    <Route path='/configurations/accommodation-types' element={<AccommodationTypes/>}/>
                    <Route path='/configurations/room-facilities' element={<RoomFacilities/>}/>
                    <Route path='/configurations/bathroom-facilities' element={<BathroomFacilities/>}/>
                    <Route path='/configurations/provinces' element={<Provinces/>}/>
                    <Route path='/configurations/location-activities' element={<LocationActivities/>}/>
                    <Route path='/configurations/driver-fare' element={<DriverFare/>}/>
                    <Route path='/configurations/driver-fare/edit' element={<EditDriverFare/>}/>
                </Routes>
            </Router>
        </>
    );
}

export default App;
