/**
 * Created by anirudhmodi on 26/05/18.
 */
import React from 'react';
import AppBodyHeaderComponent from '../CommonComponents/AppBodyHeaderComponent';
import RightComponent from '../CommonComponents/RightComponent';
import LeftComponent from '../CommonComponents/LeftComponent';
import PopUpComponent from '../CommonComponents/PopUpComponent';
import AddAuthorComponent from './AddAuthorComponent';
import AuthorList from './AuthorList';
import NavigationComponent from '../CommonComponents/NavigationComponent';
import {dispatchRouteChange} from '../../Action/actions';

export default class AuthorComponent extends React.Component
{
    constructor(props)
    {
        super(props);

        let storeState = props.store.getState();

        this.state = {
            'isPopUpVisible':false,
            'authorsList':Object.values(storeState.authors),
            'counts':Object.keys(storeState.authors).length
        };
    }

    listener = () =>
    {
        let storeState = this.props.store.getState();

        this.setState({
            'authorsList':Object.values(storeState.authors),
            'counts':Object.keys(storeState.authors).length
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
            <PopUpComponent isVisible={this.state.isPopUpVisible} onClosePopUp={this.closePopUp} headerName='Add Author'>
                <AddAuthorComponent store={this.props.store} closePopUp={this.closePopUp} />
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
                    <AppBodyHeaderComponent headerName="Authors" count={this.state.counts}/>
                    <AuthorList authors={this.state.authorsList} history={this.props.history} />
                </LeftComponent>

                <RightComponent>
                    <div className="addButton" onClick={this.showPopUp}>
                        Add Author
                    </div>
                </RightComponent>

                {this.getPopUpContent()}
            </span>
        );
    }
}