/**
 * Created by anirudhmodi on 26/05/18.
 */
import LibraryLogoComponent from '../SvgComponents/LibraryLogoComponent'
import {Link} from 'react-router-dom';
import React from 'react';

export default class AppHeaderComponent extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            'selectedTab':'books'
        };
    }

    handleSub = () =>
    {
        let routeValue = this.props.store.getState().route;

        if(routeValue!==this.state.selectedTab)
        {
            this.setState({
                selectedTab:routeValue
            });
        }
    };

    componentWillMount()
    {
        this.sub = this.props.store.subscribe(this.handleSub);
    }
    componentWillUnmount()
    {
        this.sub();
    }

    handleOnClick = (e) =>
    {
        //this.setState({
        //    selectedTab: e.target.getAttribute('data-value')
        //});
    };

    shouldComponentUpdate(nextProps, nextState)
    {

        return nextState.selectedTab!==this.state.selectedTab;
    }

    render()
    {
        return (
            <div className="appHeaderContainer">
                <LibraryLogoComponent />
                <Link to="/" data-value='books' onClick={this.handleOnClick} className={this.state.selectedTab=='books'?'selectedTab tab':'tab'}>Books</Link>
                <Link to='/authors' data-value='authors' onClick={this.handleOnClick} className={this.state.selectedTab=='authors'?'selectedTab tab':'tab'}>Authors</Link>
            </div>
        )
    }
}