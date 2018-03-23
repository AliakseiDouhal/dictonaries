import { combineReducers } from 'redux';

import submitTranslate from '../reducers/submitTranslate';
import receiveLanguage from '../reducers/receiveLanguage';
import directionTranslate from '../reducers/directionTranslate';

const rootReducer = combineReducers({
    submitTranslate,
    receiveLanguage,
    directionTranslate
});

export default rootReducer;

