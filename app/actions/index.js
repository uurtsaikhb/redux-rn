export const DATA_AVAILABLE = 'DATA_AVAILABLE';
export const USER_CLICKED_ITEM = 'USER_CLICKED_ITEM';
export const ADD_NEW_DATA = 'ADD_NEW_DATA';

import Data from '../instructions.json';

export function getData() {
    return dispatch => {
        setTimeout(() => {
            const data = Data.instructions;
            dispatch({
                type: DATA_AVAILABLE,
                data: data
            });
        }, 1000);
    };
}

export function itemClicked(item) {
    return dispatch => {
        dispatch({
            type: USER_CLICKED_ITEM,
            data: item
        });
    };
}

export function addItem(data) {
    const newItem = {
        title: 'Created by Uuree',
        description:
            'The action is a basic function called from the component whenever we want the whole state.'
    };

    return dispatch => {
        dispatch({
            type: ADD_NEW_DATA,
            data: newItem
        });
    };
}
