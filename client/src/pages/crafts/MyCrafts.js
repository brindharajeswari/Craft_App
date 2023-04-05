import React, { useState, useEffect } from "react";




function MyCrafts({ userRole }){
    const [likeArr, setLikeArray] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("craft");
        const initialValue = JSON.parse(saved);
        return initialValue ||  [];    //no value ls-returns empty array
      });

    const [photo, setPhoto] = useState([]);

    useEffect(() => {
        let photo2 = [];

        const fetchData = async () => {
            const arrayLength = likeArr.length;

            for (let i = 0; i < arrayLength; i++) {
                const photoId = likeArr[i];
                url = `https://api.pexels.com/v1/photos/${photoId}`
                try {
                const response = await fetch(url, options);
                const data = await response.json();
                photo2.push(data);
                if(arrayLength == photo2.length) {
                    setPhoto(photo2);
                }
                } catch (error) { 
                 console.log("error", error);
                }
            };
        }

        fetchData();

      }, [setPhoto]);

      return (
        <>
            <Navbar userRole={userRole}/>
            <section>
                <div className="box">
                    {crafts.map(craft =>
                        <div id="card-container" >
                            <Link to={`/craft/${craft._id}`} key={craft._id}>
                                <div id="card">
                                    <div className="front face">
                                        <img className='craft' src={craft.img} />
                                    </div>
                                    <div className="back face">
                                        <h1 className='craft'>{craft.title}</h1>
                                        <p className="artist craft">{craft.category}</p>
                                        <p className="date craft">{craft.description}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )}
                </div>

                <footer>
                    <p className='craft'>made by <a href="https://www.youtube.com/@CraftswithToddler"> Crafts with Toddler</a> ♡</p>
                </footer>
            </section>
        </>
    );
}

export default MyCrafts;