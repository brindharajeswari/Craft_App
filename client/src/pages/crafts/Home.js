import logo from '../../images/logo.png';
import { Link, useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react';

import './home.css';

function Home({ setUser }) {

    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem("token")
        navigate('/login')
        window.location.replace('./login');
    };

    useEffect(() => {
        sidebar();
    });

    function sidebar() {
        let open = document.querySelector('.navbar--icon');
        let menu = document.querySelector('.nav--open');
        let close = document.querySelector('.nav--open-icon');

        open.addEventListener('click', function () {
            menu.classList.toggle('close');
        });


        close.addEventListener('click', function () {
            menu.classList.toggle('close');
        })

    }

    return (
        <>
        <div className="home-logo">
            <div className="navbar--container sticky">
                <div className="navbar--title"><h4>navigation</h4></div>
                <div className="navbar--icon"><i className="fas fa-bars"></i></div>
            </div>
            <div className="nav--open close sticky">
                <div className="nav--open-icon"><i className="fas fa-times"></i></div>
                <div className="nav--open-title">explore</div>
                <div className="nav--open-menu">
                    <a href="">about</a>
                    <a href="">crafts</a>
                    <a href="">contact us</a>
                    <a href="" onClick={logout}>logout</a>
                </div>
            </div>
            
                <img  src={logo} alt={logo} />
            </div>

            <section>
                <h1>Hello <br /><span>Crafters</span></h1>
            </section>
            {/* <section className="two">
  <h1>I'm a <span>front-end</span><br/>engineer.</h1>
</section>
<section className="three">
  <h1>I like to <br/><span className="light">design + code</span><br/> pretty things.</h1>
</section>
<section className="four">
    <h1>you can <br/>follow me on <br/><a className="underline" target="_blank" href="https://instagram.com/hercodehaus">instagram</a><br/> or <a className="underline" target="_blank" href="https://twitter.com/juliepark">twitter.</a></h1>
</section> */}
        </>
    );
}

export default Home;