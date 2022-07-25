import React from "react";
import "./NewLocation.css";
import {styled} from "@mui/material/styles";
import Button from "@mui/material/Button";
import NewLocationForm from "../../Components/Locations/NewLocationForm/NewLocationForm";

function NewLocation() {

    return (
        <div className="main-section">
            <div className="title-box">
                <p className="title">Add New Location</p>
            </div>
            <div className="card">
                <NewLocationForm/>
            </div>
        </div>
    );
}

export default NewLocation;