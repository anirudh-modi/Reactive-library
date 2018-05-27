/**
 * Created by anirudhmodi on 25/05/18.
 */
import {ADD_AUTHOR, RECEIVE_AUTHOR, ADD_BOOK} from '../Action/actionTypes';

export default function authorReducer(state = {}, action)
{
    let {type, payload} = action;

    if(type==ADD_AUTHOR)
    {
        let newObj = {};

        newObj[payload.id] = payload;

        return Object.assign({}, state, newObj);
    }
    else if(type===RECEIVE_AUTHOR)
    {
        return Object.assign({}, state, payload);
    }
    else if(type===ADD_BOOK)
    {
        let authorObjToInsert = {};

        let authorId = payload.authorId;

        let authorObj = Object.assign({}, state[authorId]);

        let mutatePayload = Object.assign({}, payload);

        delete mutatePayload.authorDetail;

        authorObj.books = [...authorObj.books,mutatePayload];

        authorObjToInsert[authorId] = authorObj;

        return Object.assign({},state,authorObjToInsert);
    }

    return state;
}

/**
 * Created by anirudhmodi on 25/05/18.
 */
