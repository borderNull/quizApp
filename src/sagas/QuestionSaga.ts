import { all, call, put, takeLatest } from 'redux-saga/effects';
import { GET_QUESTIONS_REQUEST, GET_QUESTIONS_SUCCESS } from '../actions/types';
import { GetQuestions } from '../actions/types';


function* fetchQuizes(action: GetQuestions) {
  try {
    const { difficulty, amount } = action.payload;

    const response = yield call(fetch, `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=boolean`);

    const data = yield call([response, response.json]);

    const { results } = data;

    yield put({ type: GET_QUESTIONS_SUCCESS, payload: results })
  } catch (e) {
    console.error(e);
  }
}

function* watchQuizes() {
  yield all([
    takeLatest(GET_QUESTIONS_REQUEST, fetchQuizes)
  ]);
}

export default watchQuizes;