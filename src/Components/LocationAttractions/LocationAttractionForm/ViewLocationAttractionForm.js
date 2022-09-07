import React, {useEffect, useState} from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./LocationAttractionForm.css";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import axios from "axios";

const token = JSON.parse(sessionStorage.getItem('token'));
const config = {
    headers: {Authorization: `Bearer ` + token}
};

function ViewLocationAttractionForm(props) {

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [telephone, setTelephone] = useState("");
    const [email, setEmail] = useState("");
    const [website, setWebsite] = useState("");
    const [pictures, setPictures] = useState([]);

    useEffect(() => {
        getLocationAttractionDetails();
    }, []);


    const getLocationAttractionDetails = () => {
        axios.get("http://localhost:8080/admin/location/attraction/" + props.id, config)
            .then(res => {
                const response = res.data.body;
                setId(response.id);
                setName(response.name);
                setDescription(response.description);
                setTelephone(response.telephone);
                setEmail(response.email);
                setWebsite(response.website);
                setPictures(response.locationAttractionPictures);
            })
    }
    return (
        <>
            <div className="card">
                <h3>Basic Details</h3>
                <hr/>
                <Box
                    component="form"
                    noValidate
                    autoComplete="off"
                >
                    <div>
                        <TextField
                            InputProps={{
                                readOnly: true,
                            }}
                            id="name"
                            label="Location Attraction Name"
                            type="text"
                            value={name}
                            sx={{m: 1, width: '97%'}}/>
                        <TextField
                            InputProps={{
                                readOnly: true,
                            }}
                            id="description"
                            label="Description"
                            multiline
                            maxRows={10}
                            value={description}
                            sx={{m: 1, width: '97%'}}
                        />
                        <TextField
                            InputProps={{
                                readOnly: true,
                            }}
                            id="telephone"
                            label="Telephone"
                            type="text"
                            value={telephone}
                            sx={{m: 1, width: '32%'}}/>
                        <TextField
                            InputProps={{
                                readOnly: true,
                            }}
                            id="email"
                            label="Email"
                            type="text"
                            value={email}
                            sx={{m: 1, width: '32%'}}/>
                        <TextField
                            InputProps={{
                                readOnly: true,
                            }}
                            id="website"
                            label="Website"
                            type="text"
                            value={website}
                            sx={{m: 1, width: '32%'}}/>
                    </div>
                </Box>
                <h3>Photo Gallery</h3>
                <hr/>
                <Box
                    component="form"
                    noValidate
                    autoComplete="off"
                >
                    <div>
                        <ImageList sx={{m: "2%", width: "96%", height: 500}} cols={3} rowHeight={3}>
                            {pictures.map((item) => (
                                <ImageListItem>
                                    <img
                                        src={item}
                                        alt="location attraction picture"
                                        loading="lazy"
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </div>
                </Box>
            </div>
        </>
    );
}

export default ViewLocationAttractionForm;