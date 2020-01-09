import React,{Component} from 'react';
import {connect} from 'react-redux';
//actions or method
import {requestOneBook, editBooks, deleteBook} from '../redux/actions';
import { Link } from 'react-router-dom';
//components with update and delete methods
import UpdateBook from './dataControllers/UpdateBook';
import DeleteBook from './dataControllers/DeleteBook';
//react-bootstrap design
import {Button} from 'react-bootstrap';


const mapStateToProps = state => {
    return {
        book: state.requestOneBook.book,
        isPending: state.requestOneBook.isPending,
        error: state.requestOneBook.error,
    }
}

const mapDispathcToProps = (dispatch, ownProps) => {
    return {
        OnRequestOneBook: () => dispatch(requestOneBook(ownProps.match.params.id)),
        OnEditBook: (id, book) => dispatch(editBooks(id, book)),
        OnDeleteBook: (id) => dispatch(deleteBook(id))
    }
}

class Details extends Component{
    componentDidMount(){
        this.props.OnRequestOneBook();
    }

    render() {
    const {book, isPending, OnEditBook, OnDeleteBook} = this.props;

    return isPending?
    <h1 className="white">Loading...</h1>: 
    (<div>
        <section className="card-grey flex-ns vh-100 items-center">
            <div className="mw6 ph5 div-border">
                <img alt='Postel' src={`https://robohash.org/${book.img}`}/>
            </div>

            <div className="tc tl-ns ph3">
            <h1 className="f3 f1-l fw2 mb3 mt4 mt0-ns white">
                {book.title} <span className="white"> - {book.author}</span>
            </h1><span className="white"> price: ${book.price}</span>
            <h2 className="f5 f3-l fw1 mb4 mb5-l lh-title white">{book.description}</h2>
            <p>
            <span className="mb2 white">amount of pages: {book.pages}</span>
            </p>
            <p>
                <span><Link to={'/'}><Button variant="secondary">Back to List</Button></Link>      </span>
                <span><UpdateBook id={book._id} book={book} putMethod={OnEditBook}/>     </span>
                <span><DeleteBook id={book._id} deleteMethod={OnDeleteBook}/></span>
            </p>
            </div>
        </section> 
    </div>
    )
}
}

export default connect(mapStateToProps, mapDispathcToProps) (Details);