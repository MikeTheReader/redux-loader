
import fetch from 'isomorphic-fetch';
export const MARK_SELECTED = 'MARK_SELECTED';
export const REQUEST_DATA = 'REQUEST_DATA';
export const RECEIVE_DATA = 'RECEIVE_DATA';

export const markSelected = item => {
    return {
        type: MARK_SELECTED,
        item: item
    }
}

export const requestData = item => {
    return {
        type: REQUEST_DATA,
        item: item
    }
}

export const receiveData = data => {
    return {
        type: RECEIVE_DATA,
        data: data
    }
}

/* 
    Returning a function from an action creator requires the use of redux-thunk. Using this,
    you're able to dispatch multiple actions within a single action creator and deal with
    async calls (such as fetch).
*/
export const selectItem = item => {
    return function (dispatch) {
        dispatch(markSelected(item));
        dispatch(requestData(item));

        setTimeout(() => fetch(`${process.env.PUBLIC_URL}/data/${item}.json`).then((response) => {
            return response.json();
        }).then((json) => {
            dispatch(receiveData(json.data))
        }), 3000);
    }
}


