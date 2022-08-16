import React from "react";
import "./Locations.css";
import EditForm from "../../Components/Locations/LocationForm/EditForm";
import {useParams} from "react-router";

function EditSingleLocation() {

    let id = useParams().id;

    return (
        <>
            <div className="lower-nav-bar">
                <p className="title">Edit Location Details</p>
                <p className="sub-title">Locations / Edit Location</p>
            </div>
            <div className="main-section">
                <EditForm id={id}/>
            </div>
        </>
    );
}

export default EditSingleLocation;