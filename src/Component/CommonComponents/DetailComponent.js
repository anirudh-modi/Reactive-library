/**
 * Created by anirudhmodi on 27/05/18.
 */
import React from 'react';
import AppBodyHeaderComponent from './AppBodyHeaderComponent';
import LeftComponent from './LeftComponent';
import RightComponent from './RightComponent';
import NavigationComponent from './NavigationComponent';

export default class DetailComponent extends React.Component
{
    render()
    {
        return (
            <span className="appBodyContainer">
                <LeftComponent>
                    <AppBodyHeaderComponent headerName={this.props.headerName} />
                    {this.props.children}
                </LeftComponent>

                <RightComponent>
                    <NavigationComponent helpText={this.props.helpText} handleNext={this.props.handleNext} handlePrev={this.props.handlePrev}/>
                </RightComponent>
            </span>
        )
    }
}