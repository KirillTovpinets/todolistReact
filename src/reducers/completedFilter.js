import * as constants from '../constants';

const initialState = constants.dictionary.all;

export default function completedFilterReducer (state = initialState, action) {
    switch (action.type) {
        case constants.SHOW_ALL:
            return constants.dictionary.all;
        case constants.SHOW_COMPLETED:
            return constants.dictionary.completed;
        case constants.SHOW_INCOMPLETED:
            return constants.dictionary.incompleted;
        default:
            return state
    }
}