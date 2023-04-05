import logo from '../../images/logo.png';
import './login.css';

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userInfo, userRegister } from "../../services/userService";
import { Alert } from '@mui/material';


let emptyForm = { 
    username: '',
    password: '',
    email: '',
    name:''
}

function Register() {

    const navigate = useNavigate()

    let [form, setForm] = useState(emptyForm)
    const [alert, setAlert] = useState(false);
    const [alertContent, setAlertContent] = useState('');

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }


    const handleSubmit = async (e) => {
        e.preventDefault()

        //const token = await userRegister(form)
        const data = await userRegister(form)

        if (!data.token) {
            setForm(emptyForm)
            setAlertContent(data.error);
            setAlert(true);  
            return
        }
        localStorage.setItem("token", data.token)

        navigate('/home')
        window.location.replace('./home');
    }

    return ( 
        <>
<div className="wrapper">
        <div className=  "logo">
            <img src={logo} alt={logo}/>
        </div>
        <form autoComplete="none"   onSubmit={handleSubmit}>
             <div className=  "form-field d-flex align-items-center">
                <span className=  "far fa-address-card"></span>
                <input  value={form.name} autoComplete='off'  onChange={handleChange} type="text" name="name" id="name" placeholder="Name"/>
            </div>

            <div className=  "form-field d-flex align-items-center">
                <span className=  "far fa-envelope"></span>
                <input  value={form.email} autoComplete='off'  onChange={handleChange} type="text" name="email" id="emailid" placeholder="Email"/>
            </div>

            <div className=  "form-field d-flex align-items-center">
                <span className=  "far  fa-user"></span>
                <input  value={form.username} autoComplete='off'  onChange={handleChange} type="text" name="username" id="userName" placeholder="Username"/>
            </div>
            <div className=  "form-field d-flex align-items-center">
                <span className=  "fas fa-key"></span>
                <input  value={form.password} autoComplete='off'  onChange={handleChange} type="password" name="password" id="pwd" placeholder="Password"/>
            </div>
            {alert ? <Alert  className='alert-bg' severity="error">{alertContent}</Alert> : <></> }
            <button className=  "btn mt-3">Register</button>
        </form>
        <div class="text-center fs-6 bottom-div">
            <Link to="/login">
                Back
            </Link>
        </div>
    </div>
    
    </>
     );
}

export default Register;