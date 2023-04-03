import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Nav';
import { getAllCrafts } from '../../services/craftService';
import './manage.css';

function Manage() {

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
            <Navbar/>
            <div class="manage-container">
            <div className='craft-button'>
            <Link to="/create"><button className="btn mt-3">New Craft</button></Link>
           </div>

            <table class="manage-table">
                <thead>
                    <tr className='manage-row'>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {crafts.map(craft =>
                                <tr className='manage-row'>
                                    <td>{craft.title}</td>
                                    <td>{craft.category}</td>
                                    <td>Edit | Delete</td>
                                </tr>
                    )}
                </tbody>
            </table>
        </div>
        </>
    );
}

export default Manage;