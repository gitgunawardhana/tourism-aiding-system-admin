import React from "react";
import TextField from "@mui/material/TextField";
import VendorTable from "../../Components/Vendors/VendorTable/VendorTable";
import "./Vendors.css"

function Vendors() {
    return (
        <>
            <div className="lower-nav-bar">
                <p className="title">Vendors</p>
                <p className="sub-title">Vendors</p>
            </div>
            <div className='main-section'>
                <div className="card">
                    <TextField
                        className="vendor-search-field"
                        margin="normal"
                        id="vendor-search"
                        label="Search Vendors"
                        variant="outlined"
                    />
                    <div className="vendor-table">
                        <VendorTable/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Vendors