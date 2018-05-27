/**
 * Created by anirudhmodi on 25/05/18.
 */
import {ADD_BOOK, RECEIVE_BOOK} from '../Action/actionTypes';

export default function bookReducer(state = {}, action)
{
    let {type, payload} = action;

    if(type===ADD_BOOK)
    {
        let newObj = {};

        newObj[payload.id] = payload;

        return Object.assign({}, state, newObj);
    }
    else if(type===RECEIVE_BOOK)
    {
        return Object.assign({}, state, payload);
    }
    return state;
}

