import reducer from './reducers';
import reducerQuiz from './reducerQuiz';
import {combineReducers} from 'redux';

export default combineReducers({
    root: reducer,
    quiz: reducerQuiz
});

