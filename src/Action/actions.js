/**
 * Created by anirudhmodi on 26/05/18.
 */
import {ADD_AUTHOR, RECEIVE_AUTHOR, ROUTE_CHANGE, ADD_BOOK, RECEIVE_BOOK} from './actionTypes';

export function dispatchAddAuthor(authorDetail)
{
    "use strict";

    authorDetail.id = 'author'+(new Date()).getTime();

    return {
        'type':ADD_AUTHOR,
        'payload':authorDetail
    };
}

export function dispatchAddBook(bookDetail)
{
    "use strict";

    bookDetail.id = 'book'+(new Date()).getTime();

    return {
        'type':ADD_BOOK,
        'payload':bookDetail
    };
}

export function dispatchReceiveAuthors(authorList)
{
    "use strict";

    let authorCollection = {};

    authorList.forEach(author =>
    {
        authorCollection[author.id] = author;
    });

    return {
        'type':RECEIVE_AUTHOR,
        'payload':authorCollection
    };
}

export function dispatchReceiveBooks(bookList)
{
    "use strict";

    let bookCollection = {};

    bookList.forEach(book =>
    {
        bookCollection[book.id] = book;
    });

    return {
        'type':RECEIVE_BOOK,
        'payload':bookCollection
    };
}

export function dispatchRouteChange(route)
{
    "use strict";

    return {
        type:ROUTE_CHANGE,
        payload:route
    }
}

