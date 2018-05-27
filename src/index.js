/**
 * Created by anirudhmodi on 25/05/18.
 */
import React from 'react';
import {createStore} from 'redux';
import rootReducer from './Reducer/rootReducer';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';
import PopUpComponent from './Component/CommonComponents/PopUpComponent';
import AppHeaderComponent from './Component/CommonComponents/AppHeaderComponent';
import AuthorComponent from './Component/AuthorComponents/AuthorComponent';
import BookComponent from './Component/BookComponents/BookComponent';
import config from './config';
import {dispatchReceiveAuthors, dispatchRouteChange, dispatchReceiveBooks} from './Action/actions';
import AuthorDetailComponent from './Component/AuthorComponents/AuthorDetailComponent';
import BookDetailComponent from './Component/BookComponents/BookDetailComponent';

let store = createStore(rootReducer);

let app = document.getElementById('app');

class App extends React.Component
{
    componentDidMount()
    {
        store.dispatch(dispatchReceiveAuthors(config.authors));

        store.dispatch(dispatchReceiveBooks(config.books));

        store.subscribe(function()
        {
            console.log(store.getState());
        });
    }

    getBookComponent = (props) =>
    {
        store.dispatch(dispatchRouteChange('books'));

        return (
            <BookComponent history={props.history} store={store} />
        )
    };

    getAuthorComponent = (props) =>
    {
        store.dispatch(dispatchRouteChange('authors'));

        return (
            <AuthorComponent history={props.history} store={store} />
        )
    };

    getAuthorDetailComponent = (props) =>
    {
        let authorId = props.match.params.authorId;

        if(store.getState().authors[authorId])
        {
            store.dispatch(dispatchRouteChange('authorsDetail'));

            return (
                <AuthorDetailComponent store={store} {...props} authorId={authorId} />
            )
        }
        else
        {
            store.dispatch(dispatchRouteChange('authors'));

            return (<Redirect to="/authors" />);
        }
    };

    getBookDetailComponent = (props) =>
    {
        let bookId = props.match.params.bookId;

        if(store.getState().books[bookId])
        {
            store.dispatch(dispatchRouteChange('booksDetail'));

            return (
                <BookDetailComponent store={store} {...props} bookId={bookId} />
            )
        }
        else
        {
            store.dispatch(dispatchRouteChange('books'));

            return (<Redirect to="/books" />);
        }
    };

    render()
    {
        return (
            <Router>
                <div className="appMainContainer">
                    <AppHeaderComponent store={store} />
                    <Route path="/" exact component={this.getBookComponent} />
                    <Route path="/books" exact component={this.getBookComponent} />
                    <Route path="/authors" exact component={this.getAuthorComponent} />
                    <Route path="/authors/:authorId" exact component={this.getAuthorDetailComponent} />
                    <Route path="/books/:bookId" exact component={this.getBookDetailComponent} />
                </div>
            </Router>
        );
    }
}

render(<App />, app);