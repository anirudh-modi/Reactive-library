/**
 * Created by anirudhmodi on 25/05/18.
 */
import authorReducer from './authorReducer';
import bookReducer from './bookReducer';
import routeReducer from './routeReducer';

export default function rootReducer(state = {}, action)
{
    return {
        'route':routeReducer(state.route, action),
        'books':bookReducer(state.books, action),
        'authors':authorReducer(state.authors, action)
    }
}

