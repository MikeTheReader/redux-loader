import { MARK_SELECTED, RECEIVE_DATA, REQUEST_DATA } from '../actions';

const defaultState = {
    items: ['one', 'two', 'three'],
    selectedItem: 'one',
    isLoading: true,
    data: null
}

const loaderApp = (state = defaultState, action) => {
    switch (action.type) {
        case MARK_SELECTED:
            let newState = {
                ...state,
                selectedItem: action.item
            };
            return newState;
        case REQUEST_DATA:
            return {
                ...state,
                isLoading: true,
                data: null
            }
        case RECEIVE_DATA:
            return {
                ...state,
                isLoading: false,
                data: action.data
            }
        default:
            return state;
    }
}

export default loaderApp;