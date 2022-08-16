import React from "react";
import "./LocationAttraction.css";
import {styled} from "@mui/material/styles";
import Button from "@mui/material/Button";
import NewLocationAttractionForm
    from "../../Components/LocationAttractions/LocationAttractionForm/NewLocationAttractionForm";

function NewLocationAttraction() {

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
                <p className="title">Add New Location Attraction</p>
                <p className="sub-title">Locations / Attractions / Create Attraction</p>
            </div>
            <div className="main-section">
                <NewLocationAttractionForm/>
                <CreateButton variant="contained" size="large">
                    Add New Location Attraction
                </CreateButton>
            </div>
        </>
    );
}

export default NewLocationAttraction;