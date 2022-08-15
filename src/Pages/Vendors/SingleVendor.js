import React from "react";
import SingleVendorForm from "../../Components/Vendors/SingleVendor/SingleVendorForm/SingleVendorForm";
import AccommodationDetails from "../../Components/Vendors/SingleVendor/AccommodationDetails/AccommodationDetails";
import VehicleRentalDetails from "../../Components/Vendors/SingleVendor/VehicleRentalDetails/VehicleRentalDetails";

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