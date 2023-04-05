import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from "../../components/Nav";
import YoutubeEmbed from "../../components/YoutubeEmbed";
import { getCraft } from "../../services/craftService";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPinterest } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faHeart as heartSolid} from '@fortawesome/free-solid-svg-icons'
import { faHeart as  heartRegular} from '@fortawesome/free-regular-svg-icons'

import './craftdetail.css';

function CraftDetail({ userRole }) {
    const [craft, setCraft] = useState([])
    const [month, setMonth] = useState([])
    const [day, setDay] = useState([])
    const params = useParams()
    let navigate = useNavigate()
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];
  
    useEffect(() => {
        if (params.id) {

            getCraft(params.id).then(data => {
                console.log(data)
                setCraft(data)
                var date = new Date(data.createdAt);
                setMonth(monthNames[date.getMonth()])
                setDay(date.getDate())

            })
        }
    }, [params.id])

    function createMarkup(text) { return {__html: text}; };

    if (!craft) return '';
    return (
        <>
            <Navbar userRole={userRole}/>
            <div className="craft-card">
                <div className="thumbnail">
                    <YoutubeEmbed  className="left" embedId={craft.link} />
                </div>
                <div className="right">
                    <h1>{craft.title}</h1>
                    <div className="author">
                        <h2>{craft.category}</h2>
                    </div>
                    <div className="separator"></div>
                    <div className="instructions" dangerouslySetInnerHTML={createMarkup(craft.instruction)} />
                </div>
                <h5>
                    {day}
                </h5>
                <h6>{month}</h6>
                <ul className="icons-bottom">
                    <li><FontAwesomeIcon icon={heartRegular} beat size="2xl"  style={{color: "rgb(5 185 255)",}}/></li>
                    <li><FontAwesomeIcon icon={faFacebook} size="2xl"  style={{color: "rgb(5 185 255)",}}/></li>
                    <li><FontAwesomeIcon icon={faTwitter} size="2xl"  style={{color: "rgb(5 185 255)",}}/></li>
                    <li><FontAwesomeIcon icon={faPinterest} size="2xl"  style={{color: "rgb(5 185 255)",}}/></li>

                </ul>
                <Link to="/crafts">
                    <div className="fab"><i className="fa fa-arrow-left fa-3x"> </i></div>
                </Link>
            </div>

        </>
    );

}
export default CraftDetail;




