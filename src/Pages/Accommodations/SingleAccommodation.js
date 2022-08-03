import React from "react";
import SingleAccommodationForm
    from "../../Components/SingleAccommodation/SingleAccommodationForm/SingleAccommodationForm";
import "./Accommodations.css";

function SingleAccommodation() {

    return (
        <>
            <div className="lower-nav-bar">
                <p className="title">Single Accommodation Details</p>
                <p className="sub-title">Vendor / Accommodation / View Accommodation</p>
            </div>
            <div className="main-section">
                <SingleAccommodationForm/>
            </div>
        </>
    );
}

export default SingleAccommodation;