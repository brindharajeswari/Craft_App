import React, { useState, useEffect } from 'react';

import './home.css';
import './craft.css';
import Navbar from '../../components/Nav';
import { getAllCrafts } from '../../services/craftService';

function Craft() {

    const [crafts, setCraft] = useState([]);

    const getCraft = async () => {

        try {
            const data = await getAllCrafts()
            console.log(data)
            setCraft(data)
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {

        getCraft()
    }, []); 

    return (
        <>
            <Navbar />
            <section>
                <div className="box">
                        {crafts.map(craft =>
                            <div id="card-container" key={craft}>
                            <div id="card">
                                <div className="front face">
                                    <img className='craft' src={craft.img} />
                                </div>
                                <div className="back face">
                                    <h1 className='craft'>{craft.title}</h1>
                                    <p className="artist craft">{craft.category}</p>
                                    <p className="date craft">{craft.description}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <footer>
                    <p className='craft'>made by <a href="https://codepen.io/juliepark"> brindha</a> ♡</p>
                </footer>
            </section>
        </>
    );
}

export default Craft;