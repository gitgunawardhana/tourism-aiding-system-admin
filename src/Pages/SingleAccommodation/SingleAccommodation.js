import React, {useEffect} from "react";
import SingleAccommodationForm
    from "../../Components/SingleAccommodation/SingleAccommodationForm/SingleAccommodationForm";
import {useParams} from "react-router-dom";
import "./SingleAccommodation.css";
import {styled} from '@mui/material/styles';
import Button from '@mui/material/Button';

function SingleAccommodation() {

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);

    let action = useParams().action;
    const UpdateButton = styled(Button)(({theme}) => ({
        backgroundColor: '#00565b',
        '&:hover': {
            backgroundColor: '#00565b',
            fontWeight: 'bold'
        },
        width: '50%',
        marginLeft: '25%'
    }));

    const title = action === "view" ? "Single Accommodation Details" : "Edit Accommodation Details";
    return (
        <div className="main-section">
            <div className="title-box">
                <p className="title">{title}</p>
            </div>
            <div className="card">
                <SingleAccommodationForm/>
                <div className={action === "view" ? "update-button-hidden" : "update-button"}>
                    <UpdateButton variant="contained" size="large">
                        Update Accommodation
                    </UpdateButton>
                </div>
            </div>
            <div className={action === "view" ? "read-only-filter" : "edit-filter"}>
            </div>
        </div>
    );
}

export default SingleAccommodation;