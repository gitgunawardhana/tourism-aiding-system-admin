import React, {useState} from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import "./NewAccommodationForm.css";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import {AdapterMoment} from '@mui/x-date-pickers/AdapterMoment';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {TimePicker} from '@mui/x-date-pickers/TimePicker';
import Button from "@mui/material/Button";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

function NewAccommodationForm() {
    const [checkInTime, setCheckInTime] = React.useState(Date.now());
    const handleCheckInTime = (newValue) => {
        setCheckInTime(newValue);
    };
    const [checkOutTime, setCheckOutTime] = React.useState(Date.now());
    const handleCheckOutTime = (newValue) => {
        setCheckOutTime(newValue);
    };
    const [itemData, setItemData] = useState([]);

    const handleImageChange = event => {
        let image = event.target.files[0];
        let url = URL.createObjectURL(image);
        let name = image.name;
        let type = image.type;
        let id = itemData.length + 1;
        let items = [];
        {
            itemData.map((item) => (
                items.push(item)
            ))
        }
        items.push(createData(id, url, name, type));
        setItemData(items);
    };

    function createData(id, url, name, type) {
        return {
            id, url, name, type
        };
    }

    return (
        <>
            <div className="accommodation-form">
                <h3>Basic Details</h3>
                <hr/>
                <Box
                    component="form"
                    noValidate
                    autoComplete="off"
                >
                    <div>
                        <TextField id="name" label="Accommodation Name" type="text" sx={{m: 1, width: '32%'}}/>
                        <TextField id="telephone" label="Telephone" type="text" sx={{m: 1, width: '31%'}}/>
                        <TextField id="email" label="Email" type="text" sx={{m: 1, width: '32%'}}/>
                        {/*email_verified*/}
                        <TextField
                            id="description"
                            label="Description"
                            multiline
                            maxRows={10}
                            sx={{m: 1, width: '97%'}}
                        />
                        <FormControl
                            sx={{m: 1, width: '48%'}}>
                            <InputLabel id="vendor-type">Type</InputLabel>
                            <Select
                                labelId="accommodationType"
                                id="accommodationType"
                                label="Accommodation Type"
                                defaultValue={10}
                            >
                                <MenuItem value={10}>HOTEL</MenuItem>
                                <MenuItem value={20}>RESORT</MenuItem>
                                <MenuItem value={30}>CABIN</MenuItem>
                                <MenuItem value={40}>APARTMENT</MenuItem>
                                <MenuItem value={50}>COTTAGE</MenuItem>
                                <MenuItem value={60}>CAMPING</MenuItem>
                            </Select>
                        </FormControl>

                    </div>
                </Box>
                <h3>Location Details</h3>
                <hr/>
                <Box
                    component="form"
                    noValidate
                    autoComplete="off"
                >
                    <div>
                        <FormControl
                            sx={{m: 1, width: '29%'}}>
                            <InputLabel id="vendor-type">Type</InputLabel>
                            <Select
                                labelId="location"
                                id="location"
                                label="Nearby Location"
                                defaultValue={10}
                            >
                                <MenuItem value={10}>Colombo</MenuItem>
                                <MenuItem value={20}>Galle</MenuItem>
                                <MenuItem value={30}>Matara</MenuItem>
                                <MenuItem value={40}>Kandy</MenuItem>
                                <MenuItem value={50}>Ella</MenuItem>
                                <MenuItem value={60}>Kalutara</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField id="addressLine1" label="Address Line 01" type="text" sx={{m: 1, width: '33%'}}/>
                        <TextField id="addressLine2" label="Address Line 02" type="text" sx={{m: 1, width: '33%'}}/>
                        <TextField id="city" label="City" type="text" sx={{m: 1, width: '18%'}}/>
                        <TextField id="province" label="Province" type="text" sx={{m: 1, width: '19%'}}/>
                        <TextField id="postalCode" label="Postal Code" type="text" sx={{m: 1, width: '19%'}}/>
                        <TextField id="latitude" label="Latitude" type="text" sx={{m: 1, width: '19%'}}/>
                        <TextField id="longitude" label="Longitude" type="text" sx={{m: 1, width: '18%'}}/>
                    </div>
                </Box>
                <h3>House Rules</h3>
                <hr/>
                <Box
                    component="form"
                    noValidate
                    autoComplete="off"
                >
                    <div>
                        <LocalizationProvider dateAdapter={AdapterMoment}>

                            <TimePicker
                                label="Check In Time"
                                value={checkInTime}
                                onChange={handleCheckInTime}
                                renderInput={(params) => <TextField {...params} sx={{m: 1, width: '48%'}}/>}
                                className="time"
                            />
                            <TimePicker
                                label="Check Out Time"
                                value={checkOutTime}
                                onChange={handleCheckOutTime}
                                renderInput={(params) => <TextField {...params} sx={{m: 1, width: '48%'}}/>}

                            />
                        </LocalizationProvider>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox/>} label="Parking Available"
                                              sx={{m: 0, width: '48%'}}/>
                            <FormControlLabel control={<Checkbox/>} label="Smoking Rooms Available"
                                              sx={{m: 0, width: '48%'}}/>
                            <FormControlLabel control={<Checkbox/>} label="Pets Allowed" sx={{m: 0, width: '48%'}}/>
                        </FormGroup>
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
                            {itemData.map((item) => (
                                <ImageListItem key={item.id}>
                                    <img
                                        src={item.url}
                                        alt={item.name}
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

export default NewAccommodationForm;