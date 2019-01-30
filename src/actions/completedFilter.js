import * as constants from '../constants';

export const showAll = () => ({type: constants.SHOW_ALL});
export const showCompleted = () => ({type: constants.SHOW_COMPLETED});
export const showIncompleted = () => ({type: constants.SHOW_INCOMPLETED});