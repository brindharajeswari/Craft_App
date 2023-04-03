import React, { useState, useEffect } from 'react';

import './home.css';
import Navbar from '../../components/Nav';

function Contact() {


    return (
        <>
            <Navbar></Navbar>
            <section>
                <h1>you can <br/>follow me on <br/><a className="underline" target="_blank" href="https://www.instagram.com/craftswithtoddler3/">instagram</a><br/> or <a className="underline" target="_blank" href="https://twitter.com/craftswtoddler">twitter.</a></h1>
            </section>
        </>
    );
}

export default Contact;