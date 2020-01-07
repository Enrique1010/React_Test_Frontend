import {
    CHANGE_SEARCH_FIELD,
    REQUEST_BOOKS_PENDING,
    REQUEST_BOOKS_SUCCESS,
    REQUEST_BOOKS_FAILED,
    REQUEST_ONE_BOOKS_PENDING,
    REQUEST_ONE_BOOKS_FAILED,
    REQUEST_ONE_BOOKS_SUCCESS,
    POST_BOOKS_PENDING,
    POST_BOOKS_FAILED,
    POST_BOOKS_SUCCESS
} from "../constants";

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})

export const requestBooks = (pageNumber=1) => (dispatch) => {
    dispatch({type: REQUEST_BOOKS_PENDING});
    fetch(`http://ec2-3-89-89-61.compute-1.amazonaws.com/books?page=${pageNumber}&perPage=12`)
        .then(res => res.json())
        .then(data => dispatch({type: REQUEST_BOOKS_SUCCESS, payload: data.data}))
        .catch(err => dispatch({type: REQUEST_BOOKS_FAILED, payload: err}))
}

export const requestOneBook = (id) => (dispatch) => {
    dispatch({type: REQUEST_ONE_BOOKS_PENDING});
    fetch(`http://ec2-3-89-89-61.compute-1.amazonaws.com/books/${id}`)
        .then(res => res.json())
        .then(data => dispatch({type: REQUEST_ONE_BOOKS_SUCCESS, payload: data.book}))
        .catch(err => dispatch({type: REQUEST_ONE_BOOKS_FAILED, payload: err}))
}

export const postBooks = (body) => (dispatch) => {
    dispatch({type: POST_BOOKS_PENDING});
    fetch('http://ec2-3-89-89-61.compute-1.amazonaws.com/books', {
        method: 'POST',
        header: {
            'Accept':'application/json',
            'Content-Type':'application/json' 
        },
        body: body
    })
    .then(res => res.json())
    .then(data => dispatch({type: POST_BOOKS_SUCCESS, payload: data}))
    .catch(err => dispatch({type: POST_BOOKS_FAILED, err}))
}