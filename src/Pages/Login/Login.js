import React, {useState} from "react";
import axios from "axios";
import Swal from "sweetalert2";
import PropTypes from 'prop-types';
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox} from 'mdb-react-ui-kit';
import "./Login.css"
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import pic from "../../Assets/Admin-bro.svg"



async function loginUser(username, password) {

    // const navigate = useNavigate();

    // const data = {
    //     grant_type: "password",
    //     username: username,
    //     password: password
    // }


}

export default function Login({setToken}) {

    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();

        let data = new FormData();
        data.append('grant_type', 'password');
        data.append('username', username);
        data.append('password', password);

        const headers = {
            'Authorization': 'Basic YWRtaW46'
        }
        axios.post("http://localhost:8080/oauth/token", data, {headers})
            .then(res => {
                const token = res.data.access_token;
                setToken(token);
                window.location.reload(false);
            })
            .catch(err => {
                console.log(err)
                Swal.fire(
                    'Failed',
                    err.response.data.message,
                    'error'
                ).then(r => {
                    window.location.reload(false)
                })
            })

    }

    return (

        //     <h1>WELCOME TO ROADSIGN ADMIN PANEL</h1>
        // <form>
        //     <label>
        //         <p>Username</p>
        //         <input type="text" onChange={e => setUserName(e.target.value)}/>
        //     </label>
        //     <label>
        //         <p>Password</p>
        //         <input type="password" onChange={e => setPassword(e.target.value)}/>
        //     </label>
        //     <div>
        //         <button type="submit" onClick={handleSubmit}>Submit</button>
        //     </div>
        // </form>

        <>
            {/*<Grid container spacing={2}>*/}
            {/*    <Grid item xs={6}>*/}
            {/*        <Item>*/}
            {/*            <img src={pic} alt="Picture" className="pict"/>*/}

            {/*        </Item>*/}
            {/*    </Grid>*/}
            {/*    <Grid item xs={6}>*/}
            {/*        <Item>*/}
            {/*            <form>*/}
            {/*                <label>*/}
            {/*                    <p className="lable-text">Username</p>*/}
            {/*                    <input type="text" onChange={e => setUserName(e.target.value)} className="input-text"/>*/}
            {/*                </label>*/}
            {/*                <label>*/}
            {/*                    <p>Password</p>*/}
            {/*                    <input type="password" onChange={e => setPassword(e.target.value)} className="input-text"/>*/}
            {/*                </label>*/}
            {/*                <div>*/}
            {/*                    <button type="submit" onClick={handleSubmit}>Submit</button>*/}
            {/*                </div>*/}
            {/*            </form>*/}

            {/*        </Item>*/}
            {/*    </Grid>*/}
            {/*</Grid>*/}
            <MDBContainer fluid className="p-3 my-5 h-custom">

                <MDBRow>

                    <MDBCol col='10' md='6'>
                        <img src={pic} class="img-fluid" alt="Sample image"  className="pict"/>
                    </MDBCol>


                    <MDBCol col='4' md='6' className="input-text-margin">
                        <div className="d-flex flex-row align-items-center justify-content-center logo-section">
                            {/*<img src={logo} alt="Sphala-Logo" className="logo-img mb-1"/>*/}
                            <p className="lead fw-normal mb-1 me-3 line-height-r ">ROADSIGN <br/>
                            </p>

                        </div>

                        <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='text' size="lg" onChange={e => setUserName(e.target.value)}/>
                        <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" onChange={e => setPassword(e.target.value)}/>


                        <div className='text-center text-md-start mt-4 pt-2 ' >
                            <MDBBtn className="mb-0 px-5 login-btn" size='lg' onClick={handleSubmit} type="submit">Login</MDBBtn>
                        </div>

                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </>

    );
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
};