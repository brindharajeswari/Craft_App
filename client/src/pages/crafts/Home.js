import { Link, useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react';

import './home.css';
import Navbar from '../../components/Nav';

function Home({ user, userRole }) {


    
    return (
        <>
            <Navbar userRole={userRole}></Navbar>
            <section className='home-craft'>
                <h1>Hello <br /><span>{user}!</span>  <br />Welcome to Crafts with Toddler</h1>
            </section>
        </>
    );
}

export default Home;