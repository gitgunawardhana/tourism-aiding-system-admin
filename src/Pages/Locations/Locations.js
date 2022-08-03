import React, {useState} from "react";
import VendorForm from "../../Components/Vendors/VendorForm/VendorForm";
import AllLocations from "../../Components/Locations/LocationsTable/AllLocations";

function Locations() {

    const [isFormOpen, setIsFormOpen] = useState(false);
    const toggleFormPopup = () => {
        setIsFormOpen(!isFormOpen);
    }
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
                {isFormOpen && <VendorForm
                    handleClose={toggleFormPopup}
                />}
            </div>
        </>
    )
}

export default Locations;