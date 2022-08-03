import React from "react";
import "./Locations.css";
import NewForm from "../../Components/Locations/LocationForm/NewForm";

function NewLocation() {

    return (
        <>
            <div className="lower-nav-bar">
                <p className="title">Add New Location</p>
                <p className="sub-title">Locations / Create Location</p>
            </div>
            <div className="main-section">
                <NewForm/>
            </div>
        </>
    );
}

export default NewLocation;