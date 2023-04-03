import { Link, useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react';

import './home.css';
import Navbar from '../../components/Nav';

function Home({ user }) {


    
    return (
        <>
            <Navbar></Navbar>
            <section>
                <h1>Hello <br /><span>{user}!</span>  <br />Welcome to Crafts with Toddler</h1>
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