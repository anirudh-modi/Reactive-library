/**
 * Created by anirudhmodi on 26/05/18.
 */
import React from 'react'
import Book from './Book';

export default class BookList extends React.Component
{
    getBookList()
    {
        return this.props.books.map((book,index) => <Book classList={this.props.classList} indexInList={index} {...book} key={book.id}/>)
    }

    render()
    {
        return (<span>{this.getBookList()}</span>)
    }
}
