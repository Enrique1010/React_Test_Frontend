import React,{useState} from 'react';
import {Modal, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const DeleteBook = ({id, deleteMethod}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => 
    {
        deleteMethod(id);
        setShow(false);
    }
    const handleShow = () => setShow(true);
    const handleCloseShow = () => setShow(false);

    return(
    <>
      <Button variant="danger" onClick={handleShow}>
        Delete This Book
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure delete this book?</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseShow}>Cancel</Button>
          <Link to={'/'}><Button variant="primary" onClick={handleClose}>Yes</Button></Link>      
        </Modal.Footer>
      </Modal>
    </>
    )
}

export default DeleteBook;
