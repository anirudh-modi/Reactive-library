/**
 * Created by anirudhmodi on 26/05/18.
 */
import React from 'react';

export default class AppBodyHeaderComponent extends React.Component
{
    shouldComponentUpdate(nextProps)
    {
        return nextProps.count!==this.props.count;
    }

    render()
    {
        let {headerName, count} = this.props;

        return(
            <div className="appBodyHeaderContainer">
                <span className="appBodyHeaderTitle">{headerName.toUpperCase()}</span>
                {count?(<span className="appBodyHeaderCount">{count} {headerName}</span>):''}
            </div>
        )
    }
}
