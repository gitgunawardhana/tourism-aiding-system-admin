import React from "react";
import TextField from "@mui/material/TextField";
import VendorTable from "../../Components/Vendors/VendorTable/VendorTable";
import "./Vendors.css"

function Vendors() {
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
                </div>

                <div className="vendor-table">
                    <VendorTable/>
                </div>
            </div>
        </div>
    )
}

export default Vendors