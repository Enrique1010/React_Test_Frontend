import React from 'react';
import Card from '../Card';
import { Alert } from 'react-bootstrap';

const CardList = ({books}) => {

    return books.length === 0? <Alert variant="danger">Oh oh! No Books Aviable!</Alert>
        :(
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