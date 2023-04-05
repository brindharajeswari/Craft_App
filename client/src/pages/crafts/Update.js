import React, { useState, useEffect } from 'react';

import './home.css';
import './../users/login.css';
import Navbar from '../../components/Nav';
import { getCraft, updateCraft } from '../../services/craftService';
import { Link, useNavigate, useParams } from 'react-router-dom';

let emptyForm = {
    title: '',
    category: '',
    description: '',
    img: '',
    link: ''
}

function Update() {


    let [form, setForm] = useState([emptyForm])
    let [craft, setCraft] = useState({})

    const navigate = useNavigate()
    const params = useParams()

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    async function handleSubmit(e) {
        e.preventDefault()
        await updateCraft(craft._id, form)
        navigate('/manage')
    }

    useEffect(() => {
        if (params.id) {
            getCraft(params.id).then(data => {
                form[0] = data;
                setCraft(data)

            })

        }
    }, [params.id])

    return (
        <>
            <Navbar></Navbar>
            <div className="wrapper create">
                <div className="text-center mt-4 name create-heading">
                    Edit Craft
                </div>

                <form autoComplete="none" onSubmit={handleSubmit} >
                    <div className="form-field d-flex align-items-center">
                        <input defaultValue={craft.title} onChange={handleChange} autoComplete='off' type="text" name="title" id="title" placeholder="Craft title" />
                    </div>
                    <div className="form-field d-flex align-items-center">
                        <input defaultValue={craft.category} onChange={handleChange} autoComplete='off' type="text" name="category" id="category" placeholder="Craft category" />
                    </div>
                    <div className="form-field d-flex align-items-center">
                        <textarea defaultValue={craft.description} onChange={handleChange} autoComplete='off' type="" name="description" id="description" placeholder="Craft description" />
                    </div>
                    <div className="form-field d-flex align-items-center">
                        <textarea defaultValue={craft.instruction} onChange={handleChange} autoComplete='off' type="" name="instruction" id="instruction" placeholder="Craft instructions" />
                    </div>
                    <div className="form-field d-flex align-items-center">
                        <input defaultValue={craft.img} onChange={handleChange} autoComplete='off' type="text" name="img" id="img" placeholder="Craft image URL" />
                    </div>
                    <div className="form-field d-flex align-items-center">
                        <input defaultValue={craft.link} onChange={handleChange} autoComplete='off' type="text" name="link" id="link" placeholder="Craft Youtube URL" />
                    </div>


                    <button className="btn mt-3">Update</button>
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

export default Update;