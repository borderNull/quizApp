import { combineReducers } from 'redux';
import QuestionsReducer from './questions';

const appReducer = combineReducers({
  QuestionsData: QuestionsReducer
});

export default appReducer; 