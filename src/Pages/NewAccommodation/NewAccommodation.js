import React from "react";
import "./NewAccommodation.css";
import NewAccommodationForm from "../../Components/SingleAccommodation/NewAccommodationForm/NewAccommodationForm";
import {styled} from "@mui/material/styles";
import Button from "@mui/material/Button";

function NewAccommodation() {

    const CreateButton = styled(Button)(({theme}) => ({
        backgroundColor: '#00565b',
        '&:hover': {
            backgroundColor: '#00565b',
            fontWeight: 'bold'
        },
        width: '50%',
        marginLeft: '25%'
    }));
    return (
        <>
            <div className="lower-nav-bar">
                <p className="title">Create New Accommodation</p>
                <p className="sub-title">Vendor / Accommodation / Create Accommodation</p>
            </div>
            <div className="main-section">
                <div className="card">
                    <NewAccommodationForm/>
                    <CreateButton variant="contained" size="large">
                        Create New Accommodation
                    </CreateButton>
                </div>
            </div>
        </>
    );
}

export default NewAccommodation;