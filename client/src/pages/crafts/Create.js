import React, { useState, useEffect } from 'react';

import './home.css';
import './../users/login.css';
import Navbar from '../../components/Nav';
import { createCraft } from '../../services/craftService';
import { Link, useNavigate } from 'react-router-dom';

let emptyForm = { 
    title: '',
    category: '',
    description: '',
    img: '',
    link: ''
}

function Create() {
    
    
    let [form, setForm] = useState([emptyForm])

    const navigate = useNavigate()

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    async function handleSubmit(e) {
        e.preventDefault()
        await createCraft(form)
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
                        <input onChange={handleChange}  autoComplete='off'  type="text" name="title" id="title" placeholder="Craft title"/>
                    </div>
                    <div className=  "form-field d-flex align-items-center">
                        <input  onChange={handleChange}  autoComplete='off'  type="text" name="category" id="category" placeholder="Craft category"/>
                    </div>
                    <div className=  "form-field d-flex align-items-center">
                        <textarea  onChange={handleChange}  autoComplete='off'  type="" name="description" id="description" placeholder="Craft description"/>
                    </div>
                    <div className=  "form-field d-flex align-items-center">
                        <input  onChange={handleChange}   autoComplete='off'  type="text" name="img" id="img" placeholder="Craft image URL"/>
                    </div>
                    <div className=  "form-field d-flex align-items-center">
                        <input  onChange={handleChange}  autoComplete='off'  type="text" name="link" id="link" placeholder="Craft Youtube URL"/>
                    </div>

                    
                    <button className="btn mt-3">Create</button>
                </form>
                <div className="text-center fs-6 bottom-div">
                    <Link to="/manage">
                        Back
                    </Link>
                </div>

            </div>
        </>
    );
}

export default Create;