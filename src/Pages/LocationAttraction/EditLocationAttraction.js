import React from "react";
import "./LocationAttraction.css";
import {styled} from "@mui/material/styles";
import Button from "@mui/material/Button";
import EditLocationAttractionForm
    from "../../Components/LocationAttractions/LocationAttractionForm/EditLocationAttractionForm";

function EditLocationAttraction() {

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
                <p className="title">Edit Location Attraction</p>
                <p className="sub-title">Locations / Attractions / Edit Attraction</p>
            </div>
            <div className="main-section">
                <EditLocationAttractionForm/>
                <CreateButton variant="contained" size="large">
                    Update Location Attraction
                </CreateButton>
            </div>
        </>
    );
}

export default EditLocationAttraction;