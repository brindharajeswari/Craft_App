import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from '../images/logo.png';

function Navbar({userRole}) {

    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem("token")

        navigate('/login')
        window.location.replace('./login');
    };

    useEffect(() => {
        sidebar();
    }, []);

    function sidebar() {
        let open = document.querySelector('.navbar--icon');
        let menu = document.querySelector('.nav--open');
        let close = document.querySelector('.nav--open-icon');

        open.addEventListener('click', function () {
            menu.classList.toggle('close');
        });


        close.addEventListener('click', function () {
            menu.classList.toggle('close');
        })

    }

    return (
        <div className="home-logo">
            <div className="navbar--container sticky">
                <div className="navbar--title"><h4>navigation</h4></div>
                <div className="navbar--icon"><i className="fas fa-bars"></i></div>
            </div>
            <div className="nav--open close sticky">
                <div className="nav--open-icon"><i className="fas fa-times"></i></div>
                <div className="nav--open-title">explore</div>
                <div className="nav--open-menu">
                    <Link to="/crafts">crafts</Link>
                    <Link to="/manage">manage</Link>
                    {userRole == 'admin' ? <Link to="/users">users</Link> : ''}
                    <Link to="/contact">contact us</Link>
                    <a href="" onClick={logout}>logout</a>
                </div>
            </div>

            <img className='logo-img' src={logo} alt={logo} />
        </div>
    );
}

export default Navbar;
