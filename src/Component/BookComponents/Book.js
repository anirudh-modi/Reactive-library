/**
 * Created by anirudhmodi on 26/05/18.
 */
import React from 'react';
import BookSvgComponent from '../SvgComponents/BookSvgComponent'
import {Link} from 'react-router-dom';

export default class Book extends React.Component
{
    shouldComponentUpdate()
    {
        return false;
    }

    render()
    {
        let {bookName, isbn, id, authorDetail, about} = this.props;

        let classNameForMain = 'authorItemContainer bookItemContainer ';

        if(this.props.classList)
        {
            classNameForMain = classNameForMain + this.props.classList;
        }

        return (
            <Link to={"/books/"+id} className={classNameForMain}>
                <div className="authorIconContainer">
                    <BookSvgComponent></BookSvgComponent>
                </div>
                <div className="titleAndBornInContainer">
                    <div className="authorTitleContainer">
                        <span>{bookName}</span>
                        {authorDetail?(<span className="bookAuthorNameContainer">by <span className="bookAuthorName">{authorDetail.authorName}</span></span>):""}
                        <div className="aboutBook">{about}</div>
                    </div>
                    <div className="bornIn">{isbn}</div>
                </div>
            </Link>
        )
    }
}