/**
 * Created by anirudhmodi on 26/05/18.
 */
import React from 'react';

export default class LibraryLogoComponent extends React.Component
{
    "use strict";

    shouldComponentUpdate()
    {
        return false;
    }

    render()
    {
        return (
            <div className="appLogoContainer">
                <svg xmlns="http://www.w3.org/2000/svg" width="78" height="28" viewBox="0 0 76 21">
                    <text fill="#6379F6" fillRule="evenodd" fontFamily="Montserrat-Bold, Montserrat" fontSize="20" fontWeight="bold" transform="translate(-42 -24)">
                        <tspan x="41" y="40">Library.</tspan>
                    </text>
                </svg>
            </div>
        );
    }
}