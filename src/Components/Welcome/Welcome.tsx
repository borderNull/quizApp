import React, { FunctionComponent, useState, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { difficultyLevels } from '../../constants';
import { getQuestions } from '../../actions/questions';

import styles from './welcome.module.scss';

export const WelcomePage: FunctionComponent = () => {
  const [difficulty, setDifficulty] = useState('');
  const [questionAmount, setQuestionAmount] = useState('');

  const dispatch = useDispatch();

  const handleDifficultyChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;

    setDifficulty(value);
  }

  const handleAmountChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setQuestionAmount(value);
  };

  const handleSubmit = () => {
    dispatch(getQuestions(difficulty, questionAmount));
  }
  

  return (
    <div className={styles.wrap}>
      <h1>Welcome to the Trivia Challenge!</h1>
      <div className={styles.inputs}>
        <select className={styles.select} defaultValue="" onChange={handleDifficultyChange}>
          <option value="" hidden>Choose difficulty</option>
          {difficultyLevels.map((level) => <option key={level.id} value={level.label}>{level.label}</option>)}
        </select>
        <input type="number" placeholder="Amount of questions" className={styles.input} onChange={handleAmountChange} />
      </div>
      <button className={styles.button} disabled={!difficulty.length || !questionAmount.length} onClick={handleSubmit} type="button">Begin</button>
    </div>
  )
}

export default WelcomePage;