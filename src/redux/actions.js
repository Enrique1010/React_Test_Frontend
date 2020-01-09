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
    POST_BOOKS_SUCCESS,
    PUT_BOOKS_PENDING,
    PUT_BOOKS_SUCCESS,
    PUT_BOOKS_FAILED,
    DELETE_BOOKS_PENDING,
    DELETE_BOOKS_SUCCESS,
    DELETE_BOOKS_FAILED
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
        headers: {
            "Accept":"application/json",
            "Content-Type":"application/json"
        },
        body: JSON.stringify(body)
    })
    .then(res => res.json())
    .then(data => dispatch({type: POST_BOOKS_SUCCESS, payload: data}))
    .catch(err => dispatch({type: POST_BOOKS_FAILED, err}))
    console.log(JSON.stringify(body));
}

export const editBooks = (id, body) => (dispatch) => {
    dispatch({type: PUT_BOOKS_PENDING});
    fetch(`http://ec2-3-89-89-61.compute-1.amazonaws.com/books/${id}`, {
        method: 'PUT',
        headers: {
            "Accept":"application/json",
            "Content-Type":"application/json"
        },
        body: JSON.stringify(body)
    })
    .then(res => res.json())
    .then(data => dispatch({type: PUT_BOOKS_SUCCESS, payload: data}))
    .catch(err => dispatch({type: PUT_BOOKS_FAILED, err}))
    console.log(JSON.stringify(body));
}

export const deleteBook = (id) => (dispatch) => {
    dispatch({type: DELETE_BOOKS_PENDING});
    fetch(`http://ec2-3-89-89-61.compute-1.amazonaws.com/books/${id}`, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => dispatch({type: DELETE_BOOKS_SUCCESS, payload: data}))
    .catch(err => dispatch({type: DELETE_BOOKS_FAILED, payload: err}))
}