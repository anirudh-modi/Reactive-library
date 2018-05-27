/**
 * Created by anirudhmodi on 26/05/18.
 */
import React from 'react';
import AppBodyHeaderComponent from '../CommonComponents/AppBodyHeaderComponent';
import RightComponent from '../CommonComponents/RightComponent';
import LeftComponent from '../CommonComponents/LeftComponent';
import PopUpComponent from '../CommonComponents/PopUpComponent';
import AddBookComponent from './AddBookComponent';
import BookList from './BookList';

export default class BookComponent extends React.Component
{

    constructor(props)
    {
        super(props);

        let storeState = props.store.getState();

        this.state = {
            'isPopUpVisible':false,
            'booksList':Object.values(storeState.books),
            'counts':Object.keys(storeState.books).length
        };
    }

    listener = () =>
    {
        let storeState = this.props.store.getState();

        this.setState({
            'booksList':Object.values(storeState.books),
            'counts':Object.keys(storeState.books).length
        });
    };

    /**
     * TODO : Check for unsubscribtion properly
     */
    componentDidMount()
    {
        this.unsubStore = this.props.store.subscribe(this.listener);
    }

    componentWillUnmount()
    {
        this.unsubStore();
    }

    showPopUp = (e) =>
    {
        this.setState({
            isPopUpVisible:true
        });
    };

    getPopUpContent = () =>
    {
        if(this.state.isPopUpVisible)
        {
            return (
                <PopUpComponent isVisible={this.state.isPopUpVisible} onClosePopUp={this.closePopUp} headerName='Add Book'>
                    <AddBookComponent store={this.props.store} closePopUp={this.closePopUp} />
                </PopUpComponent>
            )
        }

        return null;
    };

    closePopUp = () =>
    {
        this.setState({
            'isPopUpVisible':false
        });
    };

    render()
    {
        return (
            <span className="appBodyContainer">

                <LeftComponent>
                    <AppBodyHeaderComponent headerName="Books" count={this.state.counts}/>
                    <BookList books={this.state.booksList} history={this.props.history} />
                </LeftComponent>

                <RightComponent>
                    <div className="addButton" onClick={this.showPopUp}>
                        Add Book
                    </div>
                </RightComponent>

                {this.getPopUpContent()}

            </span>
        );
    }
}