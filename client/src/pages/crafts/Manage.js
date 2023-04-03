import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../components/Nav';
import { deleteCraft, getAllCrafts } from '../../services/craftService';
import './manage.css';

function Manage() {

    const [crafts, setCraft] = useState([]);
    const navigate = useNavigate()

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

    async function handleDeleteCraft(id) {
        await deleteCraft(id)
        navigate('/manage')
    }


    return (
        <>
            <Navbar/>
            <div className="manage-container">
            <div className='craft-button'>
            <Link to="/craft"><button className="btn mt-3">New Craft</button></Link>
           </div>

            <table className="manage-table">
                <thead>
                    <tr className='manage-row'>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {crafts.map(craft =>
                                <tr className='manage-row' key={craft._id}>
                                    <td>{craft.title}</td>
                                    <td>{craft.category}</td>
                                    <td>
                                    <Link className='craft-edit' to={"/craft/" + craft._id}>Edit</Link> | <a href='' onClick={() => handleDeleteCraft(craft._id)} className='craft-edit'>Delete</a>
                                    </td>
                                </tr>
                    )}
                </tbody>
            </table>
        </div>
        </>
    );
}

export default Manage;