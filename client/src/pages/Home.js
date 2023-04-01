import logo from "../images/logo.jpg"
import '../App.css'

function Home(){
    return(
        <div>
            <h1>Crafts with Toddler</h1>
            <div className="logo">
                <img src={logo} alt={logo} />
            </div>
        </div>
    );
}

export default Home;