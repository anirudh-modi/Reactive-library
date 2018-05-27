/**
 * Created by anirudhmodi on 27/05/18.
 */
import React from 'react';
import NextSvgComponent from '../SvgComponents/NextSvgComponent';
import PrevSvgComponent from '../SvgComponents/PrevSvgComponent';

export default class NavigationComponent extends React.Component
{
    "use strict";

    shouldComponentUpdate(nextProps)
    {
        return (this.props.helpText!==nextProps.helpText);
    }

    render()
    {
        return (
            <div>
                <div className="navigateButtonContainer">
                    <div className="navigateButton" onClick={this.props.handlePrev}>
                        <PrevSvgComponent classList="marginAuto" />
                    </div>
                    <div className="navigateButton" onClick={this.props.handleNext}>
                        <NextSvgComponent classList="marginAuto" />
                    </div>
                </div>
                <div className="navigate">
                    {this.props.helpText}
                </div>
            </div>
        )
    }
}