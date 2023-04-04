
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../../components/Nav";
import YoutubeEmbed from "../../components/YoutubeEmbed";
import { getCraft } from "../../services/craftService";
import './craftdetail.css';

function CraftDetail(props) {
    const [craft, setCraft] = useState([])
    const params = useParams()
    let navigate = useNavigate()

    useEffect(() => {
        if (params.id) {

            getCraft(params.id).then(data => {
                console.log(data)
                setCraft(data)
            })
        }
    }, [params.id])

    function goBack() {
        navigate('/crafts')
    }



    if (!craft) return '';
    return (
        <>
            <Navbar />
            <div className="craft-card">
                <div className="thumbnail">
                    <YoutubeEmbed  className="left" embedId={craft.link} />
                </div>
                <div className="right">
                    <h1>{craft.title}</h1>
                    <div className="author"><img src="https://i.ibb.co/mJWNpXG/Brindha.jpg" />
                        <h2>{craft.category}</h2>
                    </div>
                    <div className="separator"></div>
                    <p>{craft.description}</p>
                </div>
                <h5>12</h5>
                <h6>JANUARY</h6>
                <ul>
                    <li><i className="fa fa-eye fa-2x"></i></li>
                    <li><i className="fa fa-heart-o fa-2x"></i></li>
                    <li><i className="fa fa-envelope-o fa-2x"></i></li>
                    <li><i className="fa fa-share-alt fa-2x"></i></li>
                </ul>
                <div className="fab"><i className="fa fa-arrow-down fa-3x"> </i></div>
            </div>

        </>
    );

}
export default CraftDetail;





{/* <div className="video-container">
<iframe
    width="560"
    height="315"
    src={`https://www.youtube.com/embed/${videoId}`}
    frameBorder="0"
    allowFullScreen
/>
</div>  */}

            
{/* <div className="detail-container">
<h1>{craft.title}</h1>
<h2>Watch Youtube video tutorial: </h2>

<h2>Craft Materials:</h2>
<h2>Instructions: </h2>
<img src={craft.img} />

</div> */}