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
        <div className="main-section">
            <div className="title-box">
                <p className="title">Add New Location Attraction</p>
            </div>
            <div className="card">
                <NewLocationAttractionForm/>
                <CreateButton variant="contained" size="large">
                    Add New Location Attraction
                </CreateButton>
            </div>
        </div>
    );
}

export default NewLocationAttraction;