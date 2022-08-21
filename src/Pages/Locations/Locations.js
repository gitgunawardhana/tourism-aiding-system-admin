import React from "react";
import AllLocations from "../../Components/Locations/LocationsTable/AllLocations";

function Locations() {

    return (
        <>
            <div className="lower-nav-bar">
                <p className="title">Locations</p>
                <p className="sub-title">Locations</p>
            </div>
            <div className='main-section'>
                <div className="card">
                    <AllLocations/>
                </div>
            </div>
        </>
    )
}

export default Locations;