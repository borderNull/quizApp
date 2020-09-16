import React, { FunctionComponent } from 'react';
import { PlusIcon, MinusIcon } from '../Icons/Icons';
import { AnswerProps } from './types';

import styles from './question.module.scss';


const Answer: FunctionComponent<AnswerProps> = (props) => {
  const { isCorrect, question } = props;
  const questionIcon = isCorrect ? <PlusIcon /> : <MinusIcon />; 

  return (
    <li className={styles.questionResult}>
      {questionIcon}
      <p dangerouslySetInnerHTML={{ __html: question}} />
    </li>
  )
};

export default Answer;