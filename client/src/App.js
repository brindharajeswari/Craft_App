import { useState, useEffect } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';

import { userInfo } from './services/userService';

import './App.css';

import Register from './pages/users/Register';
import Login from './pages/users/Login';
import Home from './pages/crafts/Home';
import Contact from './pages/crafts/Contact';
import Manage from './pages/crafts/Manage';
import Crafts from './pages/crafts/Crafts';
import Create from './pages/crafts/Create';
import Update from './pages/crafts/Update';
import CraftDetail from './pages/crafts/CraftDetail';
import Users from './pages/users/Users';

function App() {
  const [user, setUser] = useState({})

  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {

    let token = localStorage.getItem("token")

    if (token) {
      getLoggedInUser()
    } else {

      setIsLoading(false)
      navigate('/login')

    }

    async function getLoggedInUser() {
      const user = await userInfo()
      setUser(user)
      setIsLoading(false)
    }

  }, [])

  let loggedIn = user.username
  let userFullName = user.name
  let userId = user._id
  let userRole = user.role

console.log(user)
  return (
    <div className='App'>
      <Routes>
        {loggedIn ?
          <>
            <Route path='/home' element={<Home  user={userFullName} userRole={userRole} />} />
            <Route path='/crafts' element={<Crafts userRole={userRole}/>} />
            <Route path='/contact' element={<Contact userRole={userRole}/>} />
            <Route path='/manage' element={<Manage userId={userId} userRole={userRole}/>} />
            <Route path='/create' element={<Create  userId={userId}  userRole={userRole}/>} />        
            <Route path='/update/:id' element={<Update userRole={userRole}/>} />
            <Route path="/craft/:id" element={<CraftDetail userRole={userRole}/>} />      
            <Route path="/users" element={<Users userId={userId} userRole={userRole}/>} />      

            {!isLoading && <Route path='/home' element={<Navigate to='/home' />} />}
          </>
          :
          <>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            {!isLoading && <Route path='/' element={<Navigate to='/login' />} />}
          </>
        }
      </Routes>
    </div>
  );
}

export default App;