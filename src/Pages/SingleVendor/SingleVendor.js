import React from "react";
import SingleVendorForm from "../../Components/SingleVendor/SingleVendorForm/SingleVendorForm";
import "./SingleVendor.css"
import AccommodationDetails from "../../Components/SingleVendor/AccommodationDetails/AccommodationDetails";
import VehicleRentalDetails from "../../Components/SingleVendor/VehicleRentalDetails/VehicleRentalDetails";

function SingleVendor() {

    return (
        <>
            <div className="lower-nav-bar">
                <p className="title">Single Vendor Details</p>
                <p className="sub-title">Vendors / View Vendor</p>
            </div>
            <div className="main-section">
                <SingleVendorForm/>
                <AccommodationDetails/>
                <VehicleRentalDetails/>
            </div>
        </>
    );
}

export default SingleVendor;