import React from 'react';
import { QuestionProps } from './types';

import styles from './question.module.scss';


const Question = (props: QuestionProps) => {
  const { data: { category, question }, nextQuestion, writeAnswer } = props;

  const changeQuestion = (value: string) => {

    writeAnswer(answers => {
      return [...answers, value];
    })

    nextQuestion((prevQuestion) => {
      return prevQuestion + 1
    });
  }

  return (
    <div className={styles.wrap}>
      <h3 className={styles.category}>{category}</h3>
      <div className={styles.card}>
        <p className={styles.question} dangerouslySetInnerHTML={{ __html: question}} />
        <div className={styles.buttons}>
          <button className={styles.button} onClick={() => changeQuestion('True')}>true</button> 
          <button className={styles.button} onClick={() => changeQuestion('False')}>false</button>
        </div>
      </div>
    </div>
  )
}

export default Question;