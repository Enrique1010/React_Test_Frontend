import React from 'react';
import {Form, Button, InputGroup, Col} from 'react-bootstrap';

const FormComponent = ({handleSubmit ,validated, handleClose, title, description, price, pages, author, img}) => {

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
           defaultValue=""
           ref={title}
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
           ref={author}    
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
             ref={price}
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
         <Form.Control as="textarea" rows="5" placeholder="description" required ref={description}/>
         <Form.Control.Feedback type="invalid">
           Please provide a description.
         </Form.Control.Feedback>
       </Form.Group>
       <Form.Group as={Col} md="3" controlId="validationCustom04">
         <Form.Label style={{color: 'white'}}>Pages</Form.Label>
         <Form.Control type="number" placeholder="pages" required ref={pages}/>
         <Form.Control.Feedback type="invalid">
           Please provide amount of pages.
         </Form.Control.Feedback>
       </Form.Group>
       <Form.Group as={Col} md="3" controlId="validationCustom05">
         <Form.Label style={{color: 'white'}}>Any text</Form.Label>
         <Form.Control type="text" placeholder="Any text" required ref={img}/>
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

export default FormComponent;