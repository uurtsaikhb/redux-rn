import { combineReducers } from 'redux';

import { DATA_AVAILABLE, USER_CLICKED_ITEM, ADD_NEW_DATA } from '../actions';

let dataState = {
    data: [],
    loading: true
};

const dataReducer = (state = dataState, action) => {
    switch (action.type) {
        case DATA_AVAILABLE:
            state = Object.assign({}, state, {
                data: action.data,
                loading: false
            });
            return state;

        case ADD_NEW_DATA:
            let arr = state.data;

            state = {
                data: arr.concat(action.data),
                loading: false
            };

            return state;
        default:
            return state;
    }
};

const userReducer = (state, action) => {
    switch (action.type) {
        case USER_CLICKED_ITEM:
            return {
                title: action.data.title,
                description: action.data.description
            };
        default:
            return state || {};
    }
};

const rootReducer = combineReducers({
    dataReducer,
    userReducer
});

export default rootReducer;
