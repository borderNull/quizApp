import React from 'react';
import { useSelector } from 'react-redux';
import WelcomePage from './Components/Welcome/Welcome';
import Questions from './Components/Questions/Questions';
import { getQuestions } from './selectors/questions';

function App() {
  const questions = useSelector(getQuestions);

  if (!questions.length) {
    return  <WelcomePage />
  }

  return <Questions />;
}

export default App;
