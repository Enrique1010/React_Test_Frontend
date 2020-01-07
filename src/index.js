import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createLogger} from 'redux-logger';
import { createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import './custom.scss';
import Router from './containers/Router';
import * as serviceWorker from './serviceWorker';
import { searchBooks, requestBooks, requestOneBook, postBooks} from './redux/reducers';
import 'tachyons';

const logger = createLogger(); 
const rootReducers = combineReducers({searchBooks, requestBooks, requestOneBook, postBooks});
const store = createStore(rootReducers, applyMiddleware(thunkMiddleware ,logger));

ReactDOM.render( 
    <Provider store={store}>
        <Router/>
    </Provider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
