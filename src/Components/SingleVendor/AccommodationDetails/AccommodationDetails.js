import React from "react";
import AccommodationTable from "./AccommodationTable";
import "./AccommodationDetails.css";

const AccommodationDetails = props => {
    return (
        <div className="single-vendor-box">
            <h3>Provided Accommodation Details</h3>
            <hr/>
            <AccommodationTable/>
        </div>
    );

}
export default AccommodationDetails;