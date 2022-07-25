import React from "react";
import AccommodationTable from "./AccommodationTable";
import "./AccommodationDetails.css";
import Grid from "@mui/material/Grid";

const AccommodationDetails = props => {
    return (
        <div className="single-vendor-box">
            <Grid container spacing={2}>
                <Grid item xs={9}>
                    <h3>Provided Accommodation Details</h3>
                </Grid>
                <Grid item xs={3}>
                </Grid>
            </Grid>
            <hr/>
            <AccommodationTable/>
        </div>
    );

}
export default AccommodationDetails;