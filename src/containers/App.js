import React, {Component} from 'react';
import { connect } from 'react-redux';
//components
import CardList from '../components/dataControllers/CardList';
import SearchBox from '../components/partials/SearchBox';
import PaginationItem from '../components/partials/Pagination';
import PostBook from '../components/dataControllers/PostBook';
//actions
import {setSearchField, requestBooks, postBooks} from '../redux/actions';
//react-bootstrap design
import { Navbar } from 'react-bootstrap';

const mapStateToProps = state => {
    return {
        searchField: state.searchBooks.searchField,
        books: state.requestBooks.books,
        limit: state.requestBooks.limit,
        total: state.requestBooks.total,
        currentPage: state.requestBooks.currentPage,
        isPending: state.requestBooks.isPending,
        error: state.requestBooks.error,
        body: state.postBooks.book,
        ok: state.postBooks.ok,
        message: state.postBooks.message
    }
}

const mapDispathcToProps = (dispatch) => {
    return {
        OnSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        OnRequestBooks: (pageNumber) => dispatch(requestBooks(pageNumber)),
        OnPostBooks: (body) => dispatch(postBooks(body))
    }
}

class App extends Component {

    componentDidMount(){
        this.props.OnRequestBooks();
        //this.props.OnPostBooks();
    }

    render(){
    const { searchField, OnSearchChange, OnRequestBooks, OnPostBooks, ok, message, books, 
        isPending, limit, total, currentPage} = this.props;
    
    //get filtered books then you search in textbox
    const filteredBooks = books.filter(book => {
        return book.title.toLowerCase().includes(searchField.toLowerCase());
    })
    return isPending?
        <h1>Loading...</h1> 
        :(<div className='tc'>
            <h1>Books Store</h1>
            <Navbar className="bg-darkb justify-content-lg-center">
                <SearchBox searchChange={OnSearchChange}/>
                <PostBook postMethod={OnPostBooks} ok={ok} message={message}/>
            </Navbar>
            
            <CardList books={filteredBooks} />
            <PaginationItem booksPerPage={limit} totalBooks={total} paginate={OnRequestBooks} currentPage={currentPage}/>
        </div>
    );
}
}

export default connect(mapStateToProps, mapDispathcToProps) (App);