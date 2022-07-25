import React from "react";
import "./SingleLocation.css";
import SingleLocationForm from "../../Components/Locations/SingleLocationForm/SingleLocationForm";
import AllLocationAttractions
    from "../../Components/LocationAttractions/LocationAttractionsTable/AllLocationAttractions";
import {useParams} from "react-router";

function ViewSingleLocation() {
    let id = useParams().id;
    return (
        <div className="main-section">
            <div className="title-box">
                <p className="title">Single Location Details</p>
            </div>
            <div className="card">
                <SingleLocationForm action="view" id={id}/>
                <AllLocationAttractions/>
            </div>
        </div>
    );
}

export default ViewSingleLocation;