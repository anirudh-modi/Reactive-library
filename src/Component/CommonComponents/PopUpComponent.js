import React from 'react';
import CloseSvgComponent from '../SvgComponents/CloseSvgComponent';

export default class PopUpComponent extends React.Component
{
    shouldComponentUpdate(nextProps)
    {
        return nextProps.headerName!==this.props.headerName;
    }

    render()
    {
        return (
            <div className={this.props.isVisible?"popUpContainer visible":'popUpContainer'}>
                <div className="popUpBody">
                    <CloseSvgComponent onClosePopUp={this.props.onClosePopUp} classList="closePopUp"/>
                    <div className="popUpHeaderTitle">{this.props.headerName.toUpperCase()}</div>
                    <div className="popUpContentBody">{this.props.children}</div>
                </div>
            </div>
        );
    }
}