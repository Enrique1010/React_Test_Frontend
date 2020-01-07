import React, {useState} from 'react';
import {Button, Modal, Form, InputGroup, Col} from 'react-bootstrap';

const PostBook = ({postMethod}) => {
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);
  //const [body, setBody] = useState(body);

  //refs of form
  let titleRef = React.createRef();
  let descriptionRef = React.createRef();
  let priceRef = React.createRef();
  let pagesRef = React.createRef();
  let authorRef = React.createRef();
  let imgRef = React.createRef();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    //create object and read refs
    const data = {
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      price: priceRef.current.value,
      pages: pagesRef.current.value,
      author: authorRef.current.value,
      img: imgRef.current.value
    }
    console.log(data)
    setValidated(true);
    postMethod(data);
  };

  return (
    <>
      <Button variant="success" onClick={handleShow}>
        Add New Book +
      </Button>

      <Modal size="lg" show={show} onHide={handleClose} animation={true}>
         <div className="card-grey modal-form">
         <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Row>
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label style={{color: 'white'}}>Title</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="title"
            defaultValue=""
            ref={titleRef}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label style={{color: 'white'}}>Author</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="author"
            defaultValue=""
            ref={authorRef}    
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label style={{color: 'white'}}>Price</Form.Label>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroupPrepend">$</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              type="number"
              placeholder="price"
              aria-describedby="inputGroupPrepend"
              required
              ref={priceRef}
            />
            <Form.Control.Feedback type="invalid">
              Please choose a price.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label style={{color: 'white'}}>Desription</Form.Label>
          <Form.Control as="textarea" rows="5" placeholder="description" required ref={descriptionRef}/>
          <Form.Control.Feedback type="invalid">
            Please provide a description.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label style={{color: 'white'}}>Pages</Form.Label>
          <Form.Control type="number" placeholder="pages" required ref={pagesRef}/>
          <Form.Control.Feedback type="invalid">
            Please provide amount of pages.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label style={{color: 'white'}}>Any text</Form.Label>
          <Form.Control type="text" placeholder="Any text" required ref={imgRef}/>
          <Form.Control.Feedback type="invalid">
            Please provide any text.
          </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
      <Form.Group>
        <Form.Check
          style={{color: 'white'}}
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
        />
      </Form.Group>
      <Form.Group>
        <Button type="submit">Submit</Button>
        <span>      </span>
        <Button variant="danger" onClick={handleClose}>Cancel</Button>
      </Form.Group>
      
    </Form>
         </div>
      </Modal>
    </>
  );
}

export default PostBook;