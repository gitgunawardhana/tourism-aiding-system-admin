import React, {useEffect, useState} from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./LocationAttractionForm.css";
import Button from "@mui/material/Button";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import axios from "axios";
import {styled} from "@mui/material/styles";
import Swal from "sweetalert2";
import {useNavigate} from "react-router";

const token = JSON.parse(sessionStorage.getItem('token'));
const config = {
    headers: {Authorization: `Bearer ` + token}
};

function EditLocationAttractionForm(props) {

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [telephone, setTelephone] = useState("");
    const [email, setEmail] = useState("");
    const [website, setWebsite] = useState("");
    const [pictures, setPictures] = useState([]);
    const [picturesBase64, setPicturesBase64] = useState([]);
    const [locationId, setLocationId] = useState(0);

    const navigate = useNavigate();

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
                setLocationId(response.locationId)
            })
    }

    const handleNameChange = event => {
        setName(event.target.value);
    }

    const handleDescriptionChange = event => {
        setDescription(event.target.value);
    }

    const handleTelephoneChange = event => {
        setTelephone(event.target.value);
    }

    const handleEmailChange = event => {
        setEmail(event.target.value);
    }

    const handleWebsiteChange = event => {
        setWebsite(event.target.value);
    }

    const handleImageChange = event => {
        let image = event.target.files[0];
        let url = URL.createObjectURL(image);
        let items = [];
        let itemsBase64 = [];
        {
            pictures.map((item) => (
                items.push(item)
            ));
            picturesBase64.map((item) => (
                itemsBase64.push(item)
            ))
        }
        items.push(url);
        getBase64(image).then(
            data => itemsBase64.push(data)
        );
        setPictures(items);
        setPicturesBase64(itemsBase64);
    };

    function getBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }

    const handleSubmit = event => {

        const location = {
            id: id,
            name: name,
            description: description,
            telephone: telephone,
            email: email,
            website: website,
            locationId: locationId,
            locationAttractionPictures: picturesBase64
        };

        axios.put("http://localhost:8080/admin/location/attraction", location, config)
            .then(res => {
                if (res.data.success) {
                    Swal.fire(
                        'Done',
                        res.data.message,
                        'success'
                    ).then(r => navigate("/location/view/" + locationId))
                } else {
                    Swal.fire(
                        'Failed',
                        res.data.message,
                        'error'
                    ).then(r => {
                    })
                }

            })
            .catch(err => {
                Swal.fire(
                    'Failed',
                    'Something went wrong',
                    'error'
                ).then(r => {
                })
            })
    }

    const UpdateButton = styled(Button)(({theme}) => ({
        backgroundColor: '#00565b',
        '&:hover': {
            backgroundColor: '#00565b',
            fontWeight: 'bold'
        },
        width: '50%',
        marginLeft: '25%',
        marginBottom: '20px'
    }));


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
                            id="name"
                            label="Location Attraction Name"
                            type="text"
                            value={name}
                            onChange={handleNameChange}
                            sx={{m: 1, width: '97%'}}/>
                        <TextField
                            id="description"
                            label="Description"
                            multiline
                            maxRows={10}
                            value={description}
                            onChange={handleDescriptionChange}
                            sx={{m: 1, width: '97%'}}
                        />
                        <TextField
                            id="telephone"
                            label="Telephone"
                            type="text"
                            value={telephone}
                            onChange={handleTelephoneChange}
                            sx={{m: 1, width: '32%'}}/>
                        <TextField
                            id="email"
                            label="Email"
                            type="text"
                            value={email}
                            onChange={handleEmailChange}
                            sx={{m: 1, width: '32%'}}/>
                        <TextField
                            id="website"
                            label="Website"
                            type="text"
                            value={website}
                            onChange={handleWebsiteChange}
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
                        <Button color="success" variant="outlined" component="label">
                            Upload Image
                            <input hidden accept="image/*" multiple type="file" onChange={handleImageChange}/>
                        </Button>
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
            <UpdateButton variant="contained" size="large" onClick={handleSubmit}>
                Update Location Attraction
            </UpdateButton>
        </>
    );
}

export default EditLocationAttractionForm;