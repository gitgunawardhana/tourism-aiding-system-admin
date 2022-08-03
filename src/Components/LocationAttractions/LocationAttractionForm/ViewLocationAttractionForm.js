import React, {useState} from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./LocationAttractionForm.css";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

function ViewLocationAttractionForm() {

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
                            id="name" label="Location Attraction Name" type="text" sx={{m: 1, width: '97%'}}/>
                        <TextField
                            InputProps={{
                                readOnly: true,
                            }}
                            id="description"
                            label="Description"
                            multiline
                            maxRows={10}
                            sx={{m: 1, width: '97%'}}
                        />
                        <TextField
                            InputProps={{
                                readOnly: true,
                            }}
                            id="telephone" label="Telephone" type="text" sx={{m: 1, width: '32%'}}/>
                        <TextField
                            InputProps={{
                                readOnly: true,
                            }}
                            id="email" label="Email" type="text" sx={{m: 1, width: '32%'}}/>
                        <TextField
                            InputProps={{
                                readOnly: true,
                            }}
                            id="website" label="Website" type="text" sx={{m: 1, width: '32%'}}/>
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

export default ViewLocationAttractionForm;