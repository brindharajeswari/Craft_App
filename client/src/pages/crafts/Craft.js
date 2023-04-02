import React, { useState, useEffect } from 'react';

import './home.css';
import './craft.css';
import Navbar from '../../components/Nav';

function Craft() {


    return (
        <>
            <Navbar />
            <section>
                <div className="box">
                    <div id="card-container">
                        <div id="card">
                            <div class="front face">
                                <img className='craft' src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Bouquet_EP_cover_art.jpg/220px-Bouquet_EP_cover_art.jpg" />
                            </div>
                            <div class="back face">
                                <h1 className='craft'>Bouquet</h1>
                                <p className="artist craft">The Chainsmokers</p>
                                <p className="date craft">2015</p>
                            </div>
                        </div>
                    </div>
                    <div id="card-container">
                        <div id="card2">
                            <div class="front face">
                                <img className='craft' src="https://i.pinimg.com/originals/3f/e3/f9/3fe3f9bd5e2c4b61a8f36c8b9e3e66fa.png" />
                            </div>
                            <div class="back face">
                                <h1 className='craft'>Roses</h1>
                                <p className="artist craft">The Chainsmokers</p>
                                <p className="date craft ">2017</p>
                            </div>
                        </div>
                    </div>
                    <div id="card-container">
                        <div id="card3">
                            <div className="front face">
                                <img className='craft' src="https://i.pinimg.com/originals/3f/e3/f9/3fe3f9bd5e2c4b61a8f36c8b9e3e66fa.png" />
                            </div>
                            <div class="back face">
                                <h1 className='craft'>Waterbed</h1>
                                <p className="artist craft">The Chainsmokers</p>
                                <p className="date craft">2015</p>
                            </div>
                        </div>
                    </div>
                </div>

                <footer>
                    <p className='craft'>made by <a href="https://codepen.io/juliepark"> julie</a> ♡</p>
                </footer>
            </section>
        </>
    );
}

export default Craft;