/**
 * Created by anirudhmodi on 27/05/18.
 */
import {ROUTE_CHANGE} from '../Action/actionTypes';

export default function routeReducer(state='books',action)
{
    let {payload, type} = action;

    if(type==ROUTE_CHANGE)
    {
        return payload;
    }

    return state;
}
