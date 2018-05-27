/**
 * Created by anirudhmodi on 27/05/18.
 */
import React from 'react';
import DetailComponent from '../CommonComponents/DetailComponent';
import AuthorSvgComponent from '../SvgComponents/AuthorSvgComponent'
import BookList from '../BookComponents/BookList';

export default class AuthorDetailComponent extends React.Component
{
    handleNext = (e) =>
    {
        let authors = this.props.store.getState().authors;

        let keys = Object.keys(authors);

        let indexOfAuthor = keys.indexOf(this.props.authorId);

        if(indexOfAuthor==(keys.length-1))
        {
            this.props.history.push('/authors/'+keys[0]);
        }
        else
        {
            this.props.history.push('/authors/'+keys[indexOfAuthor+1]);
        }
    };

    handlePrev = (e) =>
    {
        let authors = this.props.store.getState().authors;

        let keys = Object.keys(authors);

        let indexOfAuthor = keys.indexOf(this.props.authorId);

        if(indexOfAuthor==0)
        {
            this.props.history.push('/authors/'+keys[keys.length-1]);
        }
        else
        {
            this.props.history.push('/authors/'+keys[indexOfAuthor-1]);
        }
    };

    render()
    {
        let {store, authorId} = this.props;

        let authorObj = store.getState().authors[authorId];

        let {authorName, country, gender, age, about, books} = authorObj;

        return (
            <DetailComponent handleNext={this.handleNext} handlePrev={this.handlePrev} helpText="Navigate to Previous / Next Author" headerName="Authors / Detail">
                <div className="detailContainer">
                    <div className="detailTitleContainer">
                        <div className="authorIconContainer height40">
                            <AuthorSvgComponent></AuthorSvgComponent>
                        </div>
                        <div className="titleAndBornInContainer">
                            <div className="authorTitleContainer">
                                <span>{authorName}</span>
                                <span className="authorAgeGender">Age {age} / {gender}</span>
                            </div>
                            <div className="bornInDetail">Born in {country}</div>
                        </div>
                    </div>
                    <div className="authorDescription">{about}</div>
                    <div className="bookAuthorList">
                        <div className="bookAuthorTitle">BOOKS WRITTEN <span className="bookAuthorCount">{books.length}</span></div>
                        <BookList classList="bookInAuthorView" books={books} history={this.props.history} />
                    </div>
                </div>
            </DetailComponent>
        );
    }
}