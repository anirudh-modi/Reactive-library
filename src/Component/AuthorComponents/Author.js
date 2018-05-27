/**
 * Created by anirudhmodi on 26/05/18.
 */
import React from 'react';
import AuthorSvgComponent from '../SvgComponents/AuthorSvgComponent'
import {Link} from 'react-router-dom';

export default class Author extends React.Component
{
    shouldComponentUpdate(nextProps)
    {
        if(nextProps.books!==this.props.books)
        {
            return true;
        }

        return false;

    }
    render()
    {
        let {authorName, age, gender, country, id} = this.props;

        return (
            <Link to={"/authors/"+id} className="authorItemContainer">
                <div className="authorIconContainer">
                    <AuthorSvgComponent></AuthorSvgComponent>
                </div>
                <div className="titleAndBornInContainer">
                    <div className="authorTitleContainer">
                        <span>{authorName}</span>
                        <span className="authorAgeGender">Age {age} / {gender}</span>
                    </div>
                    <div className="bornIn">Born in {country}</div>
                </div>
            </Link>
        )
    }
}