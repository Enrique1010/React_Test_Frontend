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

const initialStateSearch = {searchField:''}

export const searchBooks = (state=initialStateSearch, action={}) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, {searchField: action.payload});
        default:
            return state;
    }
}

const initialStateRequest = {isPending:false, books:[], error: '', currentPage:0 ,limit:0, total:0}

export const requestBooks = (state=initialStateRequest, action={}) => {
    switch (action.type) {
        case REQUEST_BOOKS_FAILED:
            return Object.assign({}, state, {error: action.payload, isPending:false});
        case REQUEST_BOOKS_PENDING:
            return Object.assign({}, state, {isPending: true});
        case REQUEST_BOOKS_SUCCESS:
            return Object.assign({}, state, {books: action.payload.docs, isPending: false, 
                limit: action.payload.limit, total: action.payload.total, currentPage: action.payload.page});
        default:
            return state;
    }
}

const initialStateRequestOneBook = {isPending:false, book:{}, error: ''}

export const requestOneBook = (state=initialStateRequestOneBook, action={}) => {
    switch (action.type) {
        case REQUEST_ONE_BOOKS_FAILED:
            return Object.assign({}, state, {error: action.payload, isPending:false});
        case REQUEST_ONE_BOOKS_PENDING:
            return Object.assign({}, state, {isPending: true});
        case REQUEST_ONE_BOOKS_SUCCESS:
            return Object.assign({}, state, {book: action.payload, isPending: false});     
        default:
            return state;
    }
}

const initialStatePostBooks = {isPending:false, book:{}, error: ''}

export const postBooks = (state=initialStatePostBooks, action={}) => {
    switch (action.type) {
        case POST_BOOKS_FAILED:
            return Object.assign({}, state, {error: action.payload, isPending:false});
        case POST_BOOKS_PENDING:
            return Object.assign({}, state, {isPending: true});
        case POST_BOOKS_SUCCESS:
            return Object.assign({}, state, {book: action.payload.data, isPending: false});   
        default:
            return state;
    }
}