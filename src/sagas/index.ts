import { all, fork } from 'redux-saga/effects';
import QuestionSaga from './QuestionSaga';

export function* saga() {
  yield all([
    fork(QuestionSaga)
  ])
};