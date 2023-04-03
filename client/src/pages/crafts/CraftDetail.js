
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Nav";
import { getAllCrafts } from "../../services/craftService";

function CraftDetail(props) {
    const [craft, setCraft] = useState([])
    const params = useParams()

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
        getCraft(params.id)
    }, [])

    console.log(craft)
    
    // if(!craft == undefined){
    return (
        <>
        
            <Navbar />
            <div className="detail-container">
                <h1>{craft.title}</h1>
                <h2>Watch Youtube video tutorial: </h2>
                <h2>Craft Materials:</h2>
                <h2>Instructions: </h2>
                <img src={craft.img} />

            </div>
        </>
    );
   // }
}
export default CraftDetail;