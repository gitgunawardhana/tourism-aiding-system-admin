import React from "react";
import AccommodationTable from "./AccommodationTable";
import "./AccommodationDetails.css";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import {useNavigate} from "react-router";
import {styled} from "@mui/material/styles";

const AccommodationDetails = props => {
    const navigate = useNavigate();
    const navigateToNewAccommodation = () => {
        navigate('/accommodation/new');
    };
    const StyledButton = styled(Button)(({theme}) => ({
        backgroundColor: '#00565b',
        '&:hover': {
            backgroundColor: '#00565b'
        },
        width: '100%',
    }));
    return (
        <div className="single-vendor-box">
            <Grid container spacing={2}>
                <Grid item xs={9}>
                    <h3>Provided Accommodation Details</h3>
                </Grid>
                <Grid item xs={3}>
                    <StyledButton className="add-new-accommodation-button" variant="contained"
                            onClick={navigateToNewAccommodation}>Create New Accommodation</StyledButton>
                </Grid>
            </Grid>
            <hr/>
            <AccommodationTable/>
        </div>
    );

}
export default AccommodationDetails;