import React, { useState, useEffect } from 'react';
import './slide.css'

 const Slide = () => {
    const [x, setX] = useState(0);
     let [nasaDa, setData] = useState(null);
     
     function fetchData() { //fetch function to get the data from the server
        fetch('/done')
        .then(response => response.json())
        .then(data => {
            setData(data) // Prints result from `response.json()` in getRequest
        })
        .catch(error => console.error(error)) //console.log if there is an error with fetching data 
    }
    
    const goLeft = () => {
        x === + 0 ? setX(- 100 * (nasaDa && nasaDa.length - 1) ) : setX(x + 100);
    }

    const goRight = () => {
        x === - 100 * (nasaDa && nasaDa.length - 1) ? setX(0) : setX(x - 100);
    }

     useEffect(() => {
         fetchData();
     }, [])


     return(
        <div className="slide" >
            {nasaDa && nasaDa.map((item, index) => {
                return( 
                <div key={index} className='mapDiv'  style={{transform:`translateX(${x}%)`}} >
                        <h1>{item.name}</h1> 
                        <img alt="" useMap="#halfGo" src={item.img}/>
                        <map name="halfGo" >
                        <area shape="rect" coords="0,0,125,250" alt="Prev" onClick={goLeft}  />
                        <area shape="rect" coords="250,125,0,0" alt="Next" onClick={goRight} />
                        </map>
                        <h2>{item.des}</h2>
                    </div>
                )
             })}
            <button onClick={goLeft} id="goLeft" title="Left" > <i className="left"></i> </button>
            <button onClick={goRight} id="goRight" title="Right" > <i className="right"></i> </button>
         </div>
     )
  }

export default Slide;