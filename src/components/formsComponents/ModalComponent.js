import React from 'react';
import {Modal, Button} from 'react-bootstrap';

const ModalComponent = ({showAlert, handleCloseAlert, message}) => {
    return (
        <Modal show={showAlert}>
        <Modal.Header>{message}</Modal.Header>
        <hr />
        <Modal.Footer className="d-flex justify-content-end">
          <Button onClick={handleCloseAlert} variant="outline-success">
            OK
          </Button>
        </Modal.Footer>
    </Modal>
    )
}

export default ModalComponent; 