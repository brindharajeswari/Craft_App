
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../components/Nav';
import { deleteUser, getAllUsers } from '../../services/userService';

function Users({ userId, userRole }) {

    const [users, setUser] = useState([]);
    const navigate = useNavigate()

    const getUser = async () => {

        try {
            const data = await getAllUsers()
            console.log(data)
            setUser(data)
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {

        getUser()
    }, []); 

    async function handleDeleteUser(id) {
        await deleteUser(id)
        navigate('/users')
    }


    return (
        <>
            <Navbar userRole={userRole}/>
            {userRole == 'admin' ?
            <div className="manage-container users">
            <table className="manage-table">
                <thead>
                    <tr className='manage-row'>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email Address</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {users.map(user =>
                                <tr className='manage-row' key={user._id}>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>
                                    <Link  className='craft-edit' to={"/update/" + user._id}>Edit</Link> { user._id != userId ? <a href='' onClick={() => handleDeleteUser(user._id)} className='craft-edit'>| Delete</a> : '' }
                                    </td>
                                </tr>
                    )}
                </tbody>
            </table>
        </div> : <section className='home-craft'>
                <h1>Access denied</h1>
            </section> }
        </>
    );
}

export default Users;