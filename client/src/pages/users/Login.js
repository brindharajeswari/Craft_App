import logo from '../../images/logo.png';
import { Link } from 'react-router-dom'
import './login.css';

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userInfo, userLogin } from '../../services/userService';

let emptyForm = { 
    username: '',
    password: ''
}

function Login({ setUser }) {

    const navigate = useNavigate()

    let [form, setForm] = useState(emptyForm)

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const token = await userLogin(form)

        if (!token) {
            setForm(emptyForm)
            return
        }

        localStorage.setItem("token", token)

        const user = await userInfo()

        navigate('/home')
        window.location.replace('./home');

    }

    function sayHello() {
        alert('You clicked me!');
      }
      
    return ( 
        <>
<div className="wrapper">
        <div className=  "logo">
            <img src={logo} alt={logo}/>
        </div>
        <form autoComplete="none"  onSubmit={handleSubmit}>
            <div className=  "form-field d-flex align-items-center">
                <span className=  "far fa-user"></span>
                <input autoComplete='off' onChange={handleChange} type="text" name="username" id="userName" placeholder="Username"/>
            </div>
            <div className=  "form-field d-flex align-items-center">
                <span className=  "fas fa-key"></span>
                <input  autoComplete='off'  onChange={handleChange} type="password" name="password" id="pwd" placeholder="Password"/>
            </div>
            <button className="btn mt-3">Login</button>
        </form>
        <div class="text-center fs-6 bottom-div">
            <Link to="/register">
                Sign up
            </Link>
        </div>

    </div>
    </>
     );
}

export default Login;