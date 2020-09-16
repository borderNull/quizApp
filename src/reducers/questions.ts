
import { GET_QUESTIONS_REQUEST, GET_QUESTIONS_SUCCESS, RESET_QUESTIONS, QuestionsActions } from '../actions/types';
import { AppState } from '../types/AppState';
import { QuestionsDataState } from '../types/QuestionsState';

const initialState: QuestionsDataState = {
  questions: []
};

const QuestionsReducer = (state = initialState, action: QuestionsActions): AppState['QuestionsData'] => {
  switch (action.type) {
    case GET_QUESTIONS_REQUEST:
      return { 
        ...state,
      }
    case GET_QUESTIONS_SUCCESS:
      return {
        ...state,
        questions: [...state.questions, ...action.payload ],
      }
    case RESET_QUESTIONS:
      return {
        ...state,
        questions: []
      }
    default: return state;
  }
}

export default QuestionsReducer;