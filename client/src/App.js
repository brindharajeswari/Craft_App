import { useState, useEffect } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';

import { userInfo } from './services/userService';

import './App.css';

import Register from './pages/users/Register';
import Login from './pages/users/Login';
import Home from './pages/crafts/Home';

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

  return (
    <div className='App'>
      <Routes>
        {loggedIn ?
          <>
            <Route path='/home/' element={<Home />} />
            {!isLoading && <Route path='/home/' element={<Navigate to='/home' />} />}
          </>
          :
          <>
            <Route path='/login/' element={<Login />} />
            <Route path='/register/' element={<Register />} />
            {!isLoading && <Route path='/' element={<Navigate to='/login' />} />}
          </>
        }
      </Routes>
    </div>
  );
}

export default App;