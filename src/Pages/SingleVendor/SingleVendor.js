import React, {useEffect} from "react";
import SingleVendorForm from "../../Components/SingleVendor/SingleVendorForm/SingleVendorForm";
import "./SingleVendor.css"
import AccommodationDetails from "../../Components/SingleVendor/AccommodationDetails/AccommodationDetails";
import VehicleRentalDetails from "../../Components/SingleVendor/VehicleRentalDetails/VehicleRentalDetails";

function SingleVendor() {

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);

    return (
        <div className="main-section">
            <div className="title-box">
                <p className="title">Single Vendor Details</p>
            </div>
            <div className="card">
                <SingleVendorForm/>
                <AccommodationDetails/>
                <VehicleRentalDetails/>
            </div>
        </div>
    );
}

export default SingleVendor;