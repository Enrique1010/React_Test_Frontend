import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
//components
import Details from '../components/Details';
import App from './App';
import ErrorPage from '../components/Error';
//import PostBook from '../components/PostBook';
import UpdateBook from '../components/UpdateBook';

class Router extends Component {
    render(){
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={App}/>
                    <Route exact path="/books/news" component={App}/>
                    <Route exact path="/book/:id" component={Details}/>
                    <Route exact path="/books/update" component={UpdateBook}/>
                    <Route component={ErrorPage}/>
                </Switch>
            </BrowserRouter>
        )
    };
}

export default Router;