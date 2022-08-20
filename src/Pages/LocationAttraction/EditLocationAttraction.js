import React from "react";
import "./LocationAttraction.css";
import EditLocationAttractionForm
    from "../../Components/LocationAttractions/LocationAttractionForm/EditLocationAttractionForm";
import {useParams} from "react-router";

function EditLocationAttraction() {

    let id = useParams().id;

    return (
        <>
            <div className="lower-nav-bar">
                <p className="title">Edit Location Attraction</p>
                <p className="sub-title">Locations / Attractions / Edit Attraction</p>
            </div>
            <div className="main-section">
                <EditLocationAttractionForm id={id}/>
            </div>
        </>
    );
}

export default EditLocationAttraction;