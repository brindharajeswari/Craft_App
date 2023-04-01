import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Home from './pages/Home';
import Login from './pages/Login';
import About from './pages/About';
import Crafts from './pages/Crafts';

function App() {
  return (
    <div className='App'>
      <Nav />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/crafts" element={<Crafts />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </div>
  );
}

export default App;