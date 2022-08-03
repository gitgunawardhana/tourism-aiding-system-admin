import React from "react";
import "./NewLocation.css";
import NewLocationForm from "../../Components/Locations/NewLocationForm/NewLocationForm";

function NewLocation() {

    return (
        <>
            <div className="lower-nav-bar">
                <p className="title">Add New Location</p>
                <p className="sub-title">Locations / Create Location</p>
            </div>
            <div className="main-section">
                <NewLocationForm/>
            </div>
        </>
    );
}

export default NewLocation;