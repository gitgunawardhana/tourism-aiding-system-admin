import React from "react";
import "./LocationAttraction.css";
import ViewLocationAttractionForm
    from "../../Components/LocationAttractions/LocationAttractionForm/ViewLocationAttractionForm";
import {useParams} from "react-router";

function ViewLocationAttraction() {

    let id = useParams().id;

    return (
        <>
            <div className="lower-nav-bar">
                <p className="title">Single Location Attraction Details</p>
                <p className="sub-title">Locations / Attractions / View Attraction</p>
            </div>
            <div className="main-section">
                <ViewLocationAttractionForm id={id}/>
            </div>
        </>
    );
}

export default ViewLocationAttraction;