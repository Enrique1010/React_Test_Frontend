import React from 'react';
import {Form, Button, InputGroup, Col} from 'react-bootstrap';

const FormUpdateComponent = ({handleSubmit ,validated, handleClose, title, description, price, pages, author, img,
titleRef, descriptionRef, priceRef, pagesRef, authorRef, imgRef}) => {

    return(
        <div className="card-grey modal-form">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
     <Form.Row>
       <Form.Group as={Col} md="4" controlId="validationCustom01">
         <Form.Label style={{color: 'white'}}>Title</Form.Label>
         <Form.Control
           required
           type="text"
           placeholder="title"
           defaultValue={title}
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
           defaultValue={author}
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
             defaultValue={price}
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
         <Form.Control as="textarea" rows="5" placeholder="description" required defaultValue={description} ref={descriptionRef}/>
         <Form.Control.Feedback type="invalid">
           Please provide a description.
         </Form.Control.Feedback>
       </Form.Group>
       <Form.Group as={Col} md="3" controlId="validationCustom04">
         <Form.Label style={{color: 'white'}}>Pages</Form.Label>
         <Form.Control type="number" placeholder="pages" required defaultValue={pages} ref={pagesRef}/>
         <Form.Control.Feedback type="invalid">
           Please provide amount of pages.
         </Form.Control.Feedback>
       </Form.Group>
       <Form.Group as={Col} md="3" controlId="validationCustom05">
         <Form.Label style={{color: 'white'}}>Any text</Form.Label>
         <Form.Control type="text" placeholder="Any text" required defaultValue={img} ref={imgRef}/>
         <Form.Control.Feedback type="invalid">
           Please provide any text.
         </Form.Control.Feedback>
       </Form.Group>
     </Form.Row>
     <Form.Group>
       <Button type="submit">Submit</Button>
       <span>      </span>
       <Button variant="danger" onClick={handleClose}>Cancel</Button>
     </Form.Group>
     
    </Form>
        </div>
    )
}

export default FormUpdateComponent;