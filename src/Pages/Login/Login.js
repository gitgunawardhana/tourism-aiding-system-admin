import React, {useState} from "react";
import axios from "axios";
import Swal from "sweetalert2";
import PropTypes from 'prop-types';

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
        <>
            <h1>WELCOME TO ROADSIGN ADMIN PANEL</h1>
            <form>
                <label>
                    <p>Username</p>
                    <input type="text" onChange={e => setUserName(e.target.value)}/>
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={e => setPassword(e.target.value)}/>
                </label>
                <div>
                    <button type="submit" onClick={handleSubmit}>Submit</button>
                </div>
            </form>
        </>
    );
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
};