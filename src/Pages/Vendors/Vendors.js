import React, {useEffect, useState} from "react";
import TextField from "@mui/material/TextField";
import VendorTable from "../../Components/Vendors/VendorTable/VendorTable";
import "./Vendors.css"
import VendorForm from "../../Components/Vendors/VendorForm/VendorForm";
import Button from "@mui/material/Button";

function Vendors() {

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);


    const [isFormOpen, setIsFormOpen] = useState(false);
    const toggleFormPopup = () => {
        setIsFormOpen(!isFormOpen);
    }
    return (
        <div className='main-section'>
            <div className="title-box">
                <p className="title">Vendors</p>
            </div>
            <div className="card">
                <div className="row">
                    <div className="column">
                        <TextField
                            className="vendor-search-field"
                            margin="normal"
                            id="vendor-search"
                            label="Search Vendors"
                            variant="outlined"
                        />
                    </div>
                    <div className="column">
                        <div className="vendor-new-button">
                            <Button
                                variant="contained"
                                size="large"
                                onClick={toggleFormPopup}>
                                Add New Vendor
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="vendor-table">
                    <VendorTable/>
                </div>
            </div>
            {isFormOpen && <VendorForm
                handleClose={toggleFormPopup}
            />}
        </div>
    )
}

export default Vendors