import React,{Component} from 'react';
import {connect} from 'react-redux';
import {requestOneBook} from '../redux/actions';
import { Link } from 'react-router-dom';


const mapStateToProps = state => {
    return {
        book: state.requestOneBook.book,
        isPending: state.requestOneBook.isPending,
        error: state.requestOneBook.error
    }
}

const mapDispathcToProps = (dispatch, ownProps) => {
    return {
        OnRequestOneBook: () => dispatch(requestOneBook(ownProps.match.params.id))
    }
}

class Details extends Component{

    componentDidMount(){
        this.props.OnRequestOneBook();
    }

    render() {

    const {book, isPending} = this.props;

    return isPending?
    <h1 className="white">Loading...</h1>: 
    (<div>
            <section className="card-grey flex-ns vh-100 items-center">
            <div className="mw6 ph5 div-border">
                <img alt='Postel' src={`https://robohash.org/${book.img}`}/>
            </div>

            <div className="tc tl-ns ph3">
    <h1 className="f3 f1-l fw2 mb3 mt4 mt0-ns white">{book.title} <span className="white"> - {book.author}</span></h1><span className="white"> price: ${book.price}</span>
    <h2 className="f5 f3-l fw1 mb4 mb5-l lh-title white">{book.description}</h2>
    <p>
    
    <span className="mb2 white">amount of pages: {book.pages}</span>
    </p>
            
            </div>
        </section>
        
        <Link to={'/'}>
            <button className="f6 link dim br3 ph3 pv2 mb2 dib white bg-dark-pink">Back to List</button>
        </Link>
       
        </div>
    )
}
}

export default connect(mapStateToProps, mapDispathcToProps) (Details);