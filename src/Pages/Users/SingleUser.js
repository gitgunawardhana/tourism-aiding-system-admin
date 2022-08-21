import React from "react";
import SingleUserForm from "../../Components/Users/SingleUser/SingleUserForm/SingleUserForm";
import AccommodationReservationTable
    from "../../Components/Users/SingleUser/AccommodationReservations/AccommodationReservationTable";
import VehicleReservationTable from "../../Components/Users/SingleUser/VehicleReservations/VehicleReservationTable";

function SingleUser() {
    return (
        <>
            <div className="lower-nav-bar">
                <p className="title">Single User Details</p>
                <p className="sub-title">Users / View User</p>
            </div>
            <div className="main-section">
                <SingleUserForm/>
                <AccommodationReservationTable/>
                <VehicleReservationTable/>
            </div>
        </>
    );
}

export default SingleUser;