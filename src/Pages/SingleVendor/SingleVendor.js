import React from "react";
import SingleVendorForm from "../../Components/SingleVendor/SingleVendorForm/SingleVendorForm";
import "./SingleVendor.css"
import AccommodationDetails from "../../Components/SingleVendor/AccommodationDetails/AccommodationDetails";
import VehicleRentalDetails from "../../Components/SingleVendor/VehicleRentalDetails/VehicleRentalDetails";

function SingleVendor() {
    return (
        <div className="single-vendor-section">
            <p className="main-label">Single Vendor Details</p>
            <hr className="main-hr"/>
            <SingleVendorForm/>
            <AccommodationDetails/>
            <VehicleRentalDetails/>
        </div>
    )
        ;
}

export default SingleVendor;