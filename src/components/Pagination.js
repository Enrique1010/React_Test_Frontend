import React from 'react';
import {Pagination} from 'react-bootstrap';

const PaginationItem = ({booksPerPage, totalBooks, paginate, currentPage}) => {
    let numberOfPages = [];

    for(let i = 1; i <= Math.ceil(totalBooks / booksPerPage); i++){
        numberOfPages.push(i);
    }

    return (
       <Pagination style={{display: 'flex', justifyContent: 'center'}}>
           {
            numberOfPages.map(number => (
            <Pagination.Item key={number} active={number === currentPage} onClick={() => paginate(number)}>
                {number}
            </Pagination.Item>
            ))
            }
       </Pagination>
    )
}

export default PaginationItem;