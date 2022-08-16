import React from "react";
import SingleAccommodationReservationForm
    from "../../../Components/Users/SingleUser/AccommodationReservations/SingleAccommodationReservationForm";

function SingleAccommodationReservation() {
    return (
        <>
            <div className="lower-nav-bar">
                <p className="title">Single Accommodation Reservation Details</p>
                <p className="sub-title">User / Accommodation Reservations / View Accommodation Reservation</p>
            </div>
            <div className="main-section">
                <SingleAccommodationReservationForm/>
            </div>
        </>
    );
}

export default SingleAccommodationReservation;