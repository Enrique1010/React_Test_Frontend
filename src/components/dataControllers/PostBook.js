import React, {useState} from 'react';
//components
import ModalComponent from '../formsComponents/ModalComponent';
import FormComponent from '../formsComponents/FormComponent';
//react-bootstrap design
import {Button, Modal} from 'react-bootstrap';


const PostBook = ({postMethod, ok, message}) => {
  const [show, setShow] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [validated, setValidated] = useState(false);

  //refs of form
  let titleRef = React.createRef();
  let descriptionRef = React.createRef();
  let priceRef = React.createRef();
  let pagesRef = React.createRef();
  let authorRef = React.createRef();
  let imgRef = React.createRef();

  //methods for close form modal
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseAlert = () => setShowAlert(false);
  const handleShowAlert = () => setShowAlert(true);

  //submit method
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }else{
      //create object and read refs
      setValidated(true);
      setShow(false);
      const data = {
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      price: Number(priceRef.current.value),
      pages: Number(pagesRef.current.value),
      author: authorRef.current.value,
      img: imgRef.current.value
      }
      //send data to post action
      postMethod(data);
      handleShowAlert();
    }
  };

  return (
    <>
      <ModalComponent showAlert={showAlert} handleCloseAlert={handleCloseAlert} message={message}/>
    
      <Button variant="success" onClick={handleShow}>
        Add New Book +
      </Button>

      <Modal size="lg" show={show} onHide={handleClose} animation={true}>

        <FormComponent handleSubmit={handleSubmit} validated={validated} handleClose={handleClose} title={titleRef} 
        description={descriptionRef} price={priceRef} pages={pagesRef} author={authorRef} img={imgRef}/>

      </Modal>
    </>
  );
}

export default PostBook;