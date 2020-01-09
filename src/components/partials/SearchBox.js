import React from 'react';
import { Form } from 'react-bootstrap';

const SearchBox = ({searchChange}) => {
    return(
        <div className='pa2'>
            <Form.Control className='pa3 ba' 
            type='search' 
            placeholder='search books'
            onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;