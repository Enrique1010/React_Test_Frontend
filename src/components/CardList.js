import React from 'react';
import Card from './Card';

const CardList = ({books}) => {

    return(
        <div>
            {
                books.map((data, i) => {
                    return (
                    <Card key={i} id={books[i]._id} title={books[i].title} 
                    img={books[i].img} price={books[i].price}/>
                    );
                })
            }
        </div>
    );
}

export default CardList;