import logo from '../../images/logo.png';
import './login.css';

import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getUser, updateUser, userInfo, userRegister } from "../../services/userService";
import { Alert } from '@mui/material';
import Navbar from '../../components/Nav';

let emptyForm = {
    name: '',
    email: '',
    username: '',
}

function UpdateUser({userRole}) {

    let [user, setUser] = useState({})
    let [form, setForm] = useState([emptyForm])

    const navigate = useNavigate()
    const params = useParams()

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    async function handleSubmit(e) {
        e.preventDefault()
        await updateUser(user._id, form)
        navigate('/users')
    }

    useEffect(() => {
        if (params.id) {
            getUser(params.id).then(data => {
                form[0] = data;
                setUser(data)

            })

        }
    }, [params.id])

    return ( 
        <>
                <Navbar userRole={userRole}></Navbar>

<div className="wrapper">
        <div className="text-center mt-4 name create-heading">
                    Update User
                </div>

        <form autoComplete="none"   onSubmit={handleSubmit}>
             <div className=  "form-field d-flex align-items-center">
                <span className=  "far fa-address-card"></span>
                <input  defaultValue={user.name}   autoComplete='off'  onChange={handleChange} type="text" name="name" id="name" placeholder="Name"/>
            </div>

            <div className=  "form-field d-flex align-items-center">
                <span className=  "far fa-envelope"></span>
                <input  defaultValue={user.email}  autoComplete='off'  onChange={handleChange} type="text" name="email" id="emailid" placeholder="Email"/>
            </div>

            <div className=  "form-field d-flex align-items-center">
                <span className=  "far  fa-user"></span>
                <input  defaultValue={user.username} autoComplete='off'  onChange={handleChange} type="text" name="username" id="userName" placeholder="Username"/>
            </div>
            <button className=  "btn mt-3">Update</button>
        </form>
        <div className="text-center fs-6 bottom-div">
            <Link to="/users">
                Back
            </Link>
        </div>
    </div>
    
    </>
     );
}

export default UpdateUser;