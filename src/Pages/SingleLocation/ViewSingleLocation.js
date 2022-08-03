import React from "react";
import "./SingleLocation.css";
import SingleLocationForm from "../../Components/Locations/SingleLocationForm/SingleLocationForm";
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
                    <SingleLocationForm action="view" id={id}/>
                    <AllLocationAttractions/>
            </div>
        </>
    );
}

export default ViewSingleLocation;