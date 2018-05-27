/**
 * Created by anirudhmodi on 26/05/18.
 */
import React from 'react'
import Author from './Author';

export default class AuthorList extends React.Component
{
    getAuthorList()
    {
        return this.props.authors.map((author,index) => <Author indexInList={index} {...author} key={author.id}/>)
    }

    render()
    {
        return (<span>{this.getAuthorList()}</span>)
    }
}
