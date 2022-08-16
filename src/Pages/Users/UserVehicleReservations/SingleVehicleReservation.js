import React from "react";
import SingleVehicleReservationForm
    from "../../../Components/Users/SingleUser/VehicleReservations/SingleVehicleReservationForm";

function SingleVehicleReservation() {
    return (
        <>
            <div className="lower-nav-bar">
                <p className="title">Single Vehicle Reservation Details</p>
                <p className="sub-title">User / Vehicle Reservations / View Vehicle Reservation</p>
            </div>
            <div className="main-section">
                <SingleVehicleReservationForm/>
            </div>
        </>
    );
}

export default SingleVehicleReservation;