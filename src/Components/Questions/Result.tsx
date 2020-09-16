import React, { FunctionComponent } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getQuestions } from '../../selectors/questions';
import { resetQuestions } from '../../actions/questions';

import Answer from './Answer';

import { IQuestion } from '../../types/QuestionsState';
import { ResultProps } from './types';

import styles from './question.module.scss';



export const Result: FunctionComponent<ResultProps> = (props: ResultProps) => {
  const questions: Array<IQuestion> = useSelector(getQuestions);
  const dispatch = useDispatch();
  const { answers } = props;
  const correctAnswers = questions.filter((question: IQuestion, index: number) => question.correct_answer === answers[index]);
  const renderAnswers = questions.map((element: IQuestion, index: number) => {
    const { correct_answer, question } = element;
    return <Answer question={question} isCorrect={correct_answer === answers[index]} key={index} />
  })

  const playAgain = () => {
    dispatch(resetQuestions())
  }

  return (
    <div className={styles.result}>
      <h3 className={styles.resultTitle}>You scored {correctAnswers.length}/{questions.length}</h3>
      <ul className={styles.resultList}>{renderAnswers}</ul>
      <button className={styles.buttonPlay} onClick={playAgain}>Play again?</button>
    </div>
  )
}

export default Result;