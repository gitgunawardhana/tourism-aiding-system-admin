import React, {useState} from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./LocationAttractionForm.css";
import Button from "@mui/material/Button";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import {styled} from "@mui/material/styles";
import axios from "axios";
import Swal from "sweetalert2";
import {useNavigate} from "react-router";

const token = JSON.parse(sessionStorage.getItem('token'));
const config = {
    headers: {Authorization: `Bearer ` + token}
};

function NewLocationAttractionForm(props) {

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [telephone, setTelephone] = useState("");
    const [email, setEmail] = useState("");
    const [website, setWebsite] = useState("");
    const [locationId, setLocationId] = useState(props.locationId);
    const [pictures, setPictures] = useState([]);
    const [picturesBase64, setPicturesBase64] = useState([]);

    const navigate = useNavigate();

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
            name: name,
            description: description,
            telephone: telephone,
            email: email,
            website: website,
            locationId: locationId,
            locationAttractionPictures: picturesBase64
        };

        axios.post("http://localhost:8080/admin/location/attraction", location, config)
            .then(res => {
                if (res.data.success) {
                    Swal.fire(
                        'Done',
                        res.data.message,
                        'success'
                    ).then(r => navigate("/locations"))
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Failed',
                        text: res.data.message
                    }).then(r => console.log(r))
                }
            })
            .catch(err => {
                Swal.fire(
                    'Failed',
                    'Something went wrong',
                    'error'
                )
            })
    }

    const CreateButton = styled(Button)(({theme}) => ({
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
                            onChange={handleNameChange}
                            sx={{m: 1, width: '97%'}}/>
                        <TextField
                            id="description"
                            label="Description"
                            multiline
                            maxRows={10}
                            onChange={handleDescriptionChange}
                            sx={{m: 1, width: '97%'}}
                        />
                        <TextField
                            id="telephone"
                            label="Telephone"
                            type="text"
                            onChange={handleTelephoneChange}
                            sx={{m: 1, width: '32%'}}/>
                        <TextField
                            id="email"
                            label="Email"
                            type="text"
                            onChange={handleEmailChange}
                            sx={{m: 1, width: '32%'}}/>
                        <TextField
                            id="website"
                            label="Website"
                            type="text"
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
            <CreateButton variant="contained" size="large" onClick={handleSubmit}>
                Add New Location Attraction
            </CreateButton>
        </>
    );
}

export default NewLocationAttractionForm;