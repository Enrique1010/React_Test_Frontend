import React from 'react';
import { Link } from 'react-router-dom';


const Card = ({id, title , price, img})=>{

    return (
        <Link to={`/book/${id}`}>
        <div className='card-grey dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt="Books" src={`https://robohash.org/${img}?120x120`}></img>
            <div>
                <h3 className="h3 white">Title: {title}</h3>
                <p className="white">${price}</p>
            </div>
        </div>
        </Link>
        
    );
}

export default Card;
