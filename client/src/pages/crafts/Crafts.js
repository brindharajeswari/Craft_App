import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './home.css';
import './craft.css';
import Navbar from '../../components/Nav';
import { getAllCrafts } from '../../services/craftService';

function Crafts({userRole}) {

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
            <Navbar userRole={userRole} />
            <section>
                <div className="box">
                    {crafts.map(craft =>
                        <div id="card-container" >
                            <Link to={`/craft/${craft._id}`} key={craft._id}>
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
                            </Link>
                        </div>
                    )}
                </div>

                <footer>
                    <p className='craft'>made by <a href="https://www.youtube.com/@CraftswithToddler"> Crafts with Toddler</a> ♡</p>
                </footer>
            </section>
        </>
    );
}

export default Crafts;