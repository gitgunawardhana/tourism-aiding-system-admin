import React from "react";
import "./Locations.css";
import ViewForm from "../../Components/Locations/LocationForm/ViewForm";
import AllLocationAttractions
    from "../../Components/LocationAttractions/LocationAttractionsTable/AllLocationAttractions";
import {useParams} from "react-router";

function ViewSingleLocation() {
    let id = useParams().id;
    return (
        <>
            <div className="lower-nav-bar">
                <p className="title">Single Location Details</p>
                <p className="sub-title">Locations / View Location</p>
            </div>
            <div className="main-section">
                    <ViewForm id={id}/>
                    <AllLocationAttractions/>
            </div>
        </>
    );
}

export default ViewSingleLocation;