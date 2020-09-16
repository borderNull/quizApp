import React, { FunctionComponent, useState } from 'react';
import { useSelector } from 'react-redux';
import { getQuestions } from '../../selectors/questions';
import Question from './Question';
import Result from './Result';

import styles from './question.module.scss';

export const Questions: FunctionComponent = () => {
  const questions = useSelector(getQuestions);
  const [currentQuestion, setCurrentQuestions] = useState(0);
  const [questionAnswers, setQuestionAnswers] = useState<Array<string>>([]);

  if (currentQuestion >= questions.length) {
    return (
      <div className={styles.resultWrap}>
        <Result answers={questionAnswers} />
      </div>
    )
  }

  return (
    <div className={styles.questions}>
      <Question data={questions[currentQuestion]} nextQuestion={setCurrentQuestions} writeAnswer={setQuestionAnswers} />
      <div className={styles.questionAmount}>{currentQuestion + 1} of {questions.length}</div>
    </div>
    )
}

export default Questions;