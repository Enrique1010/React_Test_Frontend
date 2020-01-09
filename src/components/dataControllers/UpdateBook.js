import React, {useState} from 'react';
import FormUpdateComponent from '../formsComponents/FormUpdateComponent';
import { Modal, Button} from 'react-bootstrap';

const UpdateBook = ({id, book, putMethod}) => {
  const [show, setShow] = useState(false);
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

  //submit method
  const handleSubmit = event => {
    //event.preventDefault();
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
      putMethod(id, data);
    }
  };

return (
        <>
            <Button variant="warning" onClick={handleShow}>
                Edit this Book
            </Button>

            <Modal size="lg" show={show} onHide={handleClose} animation={true}>
               <FormUpdateComponent handleSubmit={handleSubmit} validated={validated} handleClose={handleClose} title={book.title} 
                description={book.description} price={book.price} pages={book.pages} author={book.author} img={book.img}
                titleRef={titleRef} descriptionRef={descriptionRef} priceRef={priceRef} pagesRef={pagesRef} 
                authorRef={authorRef} imgRef={imgRef}/>
            </Modal>
        </>
    );
}

export default UpdateBook;