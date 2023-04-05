import React, { useState, useEffect } from 'react';

import './home.css';
import './../users/login.css';
import Navbar from '../../components/Nav';
import { createCraft } from '../../services/craftService';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Alert } from '@mui/material';

let emptyForm = { 
    title: '',
    category: '',
    description: '',
    img: '',
    link: ''
}

function Create() {

    const [alert, setAlert] = useState(false);
    const [alertContent, setAlertContent] = useState('');
    let [form, setForm] = useState(emptyForm)
    const navigate = useNavigate()

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    async function handleSubmit(e) {
        e.preventDefault()
        const error = await createCraft(form)

        if (error.message !== undefined ) {
            setAlertContent(error.message);
            setAlert(true);  
            return
        }
        navigate('/manage')
    }


    return (
        <>
            <Navbar></Navbar>
            <div className="wrapper create">
                <div className="text-center mt-4 name create-heading">
                   New Craft
                </div>

                <form autoComplete="none" onSubmit={handleSubmit} >
                    <div className=  "form-field d-flex align-items-center">
                        <input  onChange={handleChange}  autoComplete='off'  type="text" name="title" id="title" placeholder="Craft title"/>
                    </div>
                    <div className=  "form-field d-flex align-items-center">
                        <input  onChange={handleChange}  autoComplete='off'  type="text" name="category" id="category" placeholder="Craft category"/>
                    </div>
                    <div className=  "form-field d-flex align-items-center">
                        <textarea  onChange={handleChange}  autoComplete='off'  type="" name="description" id="description" placeholder="Craft description"/>
                    </div>
                    <div className=  "form-field d-flex align-items-center">
                        <textarea  onChange={handleChange}  autoComplete='off'  type="" name="instruction" id="instruction" placeholder="Craft instructions"/>
                    </div>
                    <div className=  "form-field d-flex align-items-center">
                        <input  onChange={handleChange}   autoComplete='off'  type="text" name="img" id="img" placeholder="Craft image URL"/>
                    </div>
                    <div className=  "form-field d-flex align-items-center">
                        <input  onChange={handleChange}  autoComplete='off'  type="text" name="link" id="link" placeholder="Craft Youtube ID"/>
                    </div>
                    {alert ? <Alert  className='alert-bg' severity="error">{alertContent}</Alert> : <></> }
                    <button className="btn mt-3">Create</button>
                </form>
                <div class="text-center fs-6 bottom-div">
                    <Link to="/manage">
                        Back
                    </Link>
                </div>

            </div>
        </>
    );
}

export default Create;