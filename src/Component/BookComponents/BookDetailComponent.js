/**
 * Created by anirudhmodi on 27/05/18.
 */
import React from 'react';
import DetailComponent from '../CommonComponents/DetailComponent';
import BookSvgComponent from '../SvgComponents/BookSvgComponent'

export default class BookDetailComponent extends React.Component
{
    handleNext = (e) =>
    {
        let books = this.props.store.getState().books;

        let keys = Object.keys(books);

        let indexOfBook = keys.indexOf(this.props.bookId);

        if(indexOfBook==(keys.length-1))
        {
            this.props.history.push('/books/'+keys[0]);
        }
        else
        {
            this.props.history.push('/books/'+keys[indexOfBook+1]);
        }
    };

    handlePrev = (e) =>
    {
        let books = this.props.store.getState().books;

        let keys = Object.keys(books);

        let indexOfBook = keys.indexOf(this.props.bookId);

        if(indexOfBook==0)
        {
            this.props.history.push('/books/'+keys[keys.length-1]);
        }
        else
        {
            this.props.history.push('/books/'+keys[indexOfBook-1]);
        }
    };

    render()
    {
        let {store, bookId} = this.props;

        let bookObj = store.getState().books[bookId];

        let {authorDetail, isbn, bookName, about} = bookObj;

        return (
            <DetailComponent handleNext={this.handleNext} handlePrev={this.handlePrev} helpText="Navigate to Previous / Next Book" headerName="Books / Detail">
                <div className="detailContainer">
                    <div className="detailTitleContainer">
                        <div className="authorIconContainer height40">
                            <BookSvgComponent></BookSvgComponent>
                        </div>
                        <div className="titleAndBornInContainer">
                            <div className="authorTitleContainer">
                                <span>{bookName}</span>
                                <span className="bookAuthorNameContainer">by <span className="bookAuthorName">{authorDetail.authorName}</span></span>
                            </div>
                            <div className="bornInDetail">{isbn}</div>
                        </div>
                    </div>
                    <div className="bookListDetail">
                        <div className="aboutDescriptionInDetail authorDescription">{about}</div>
                    </div>
                </div>
            </DetailComponent>
        );
    }
}