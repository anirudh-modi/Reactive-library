/**
 * Created by anirudhmodi on 27/05/18.
 */
import React from 'react';

export default class PrevSvgComponent extends React.Component
{
    shouldComponentUpdate(nextProps)
    {
        return nextProps.classList!==this.props.classList;
    }

    render()
    {
        return (
            <svg className={this.props.classList} xmlns="http://www.w3.org/2000/svg" width="14" height="24" viewBox="0 0 14 24">
                <path fill="#9395A0" fillRule="evenodd" d="M3.515 12l9.9 9.9L12 23.313l-9.9-9.9L.687 12 12 .686l1.414 1.415L3.514 12z"/>
            </svg>
        );
    }
}