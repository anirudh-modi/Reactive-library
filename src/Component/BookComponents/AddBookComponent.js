/**
 * Created by anirudhmodi on 26/05/18.
 */
import React from 'react';
import {dispatchAddBook} from '../../Action/actions';

export default class AddBookComponent extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            'authorId':'',
            'bookName':'',
            'isbn':'',
            "about":''
        };

        this.saveBook = this.saveBook.bind(this);
    }

    handleChange = ({target}) =>
    {
        let id =  target.id;

        let newState = {};

        newState[id] = target.value;

        this.setState(newState);
    };

    getAuthors = () =>
    {
        let {store} = this.props;

        let authors = Object.values(store.getState().authors);

        return authors.map(auth => (<option key={auth.id} value={auth.id}>{auth.authorName}</option>));
    };

    saveBook = () =>
    {
        let {authorId, bookName, isbn, about} = this.state;

        let book = {
            'bookName':bookName,
            'authorId':authorId,
            'isbn':isbn,
            'about':about
        };

        if(bookName && authorId && isbn)
        {
            let authorObj = this.props.store.getState().authors[authorId];

            book['authorDetail'] = {
                'authorName':authorObj.authorName,
                'authorId':authorId
            };

            this.props.store.dispatch(dispatchAddBook(book));

            this.props.closePopUp();
        }
        else
        {
            alert('Fill the details');
        }
    };

    render()
    {
        let {authorId, bookName, isbn, about} = this.state;

        return (
            <span>
                <div>
                    <input required id='bookName' type="text" value={bookName} onChange={this.handleChange} placeholder="Book Name" className="textInput" />
                </div>
                <div className="containeForInputAndSelect">
                    <select id="authorId" value={authorId} className='selectTag selectAuthor' onChange={this.handleChange}>
                        <option value="">Select Author</option>
                        {this.getAuthors()}
                    </select>
                </div>
                <div>
                    <input required type="text" onChange={this.handleChange} placeholder="ISBN Number" className="textInput" id="isbn" value={isbn} />
                </div>
                <div>
                    <textarea onChange={this.handleChange} placeholder="Description of book" className="textArea textInput" value={about} id="about"></textarea>
                </div>
                <div className="bottomDiv">
                    <button className="marginRight10" onClick={this.props.closePopUp}>Cancel</button>
                    <button className="saveButton marginLeft10" onClick={this.saveBook}>Save Book</button>
                </div>
            </span>
        )
    }
}