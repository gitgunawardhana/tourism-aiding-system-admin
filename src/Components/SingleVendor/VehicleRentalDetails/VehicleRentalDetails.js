import React from "react";
import VehicleRentalTable from "./VehicleRentalTable";
import "./VehicleRentalDetails.css";

const VehicleRentalDetails = props => {
    return (
        <div className="single-vendor-box">
            <h3>Provided Vehicle Rental Details</h3>
            <hr/>
            <VehicleRentalTable/>
        </div>
    );

}
export default VehicleRentalDetails;