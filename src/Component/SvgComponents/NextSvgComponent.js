/**
 * Created by anirudhmodi on 27/05/18.
 */
import React from 'react';

export default class NextSvgComponent extends React.Component
{
    "use strict";

    shouldComponentUpdate(nextProps)
    {
        return nextProps.classList!==this.props.classList;
    }

    render()
    {
        return (
            <svg className={this.props.classList} xmlns="http://www.w3.org/2000/svg" width="14" height="24" viewBox="0 0 14 24">
                <path fill="#9395A0" fillRule="evenodd" d="M10.485 12l-9.9 9.9L2 23.313l9.9-9.9L13.313 12 2 .686.586 2.101l9.9 9.899z"/>
            </svg>
        )
    }
}