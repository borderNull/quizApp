import React from 'react';

export type QuestionProps = {
  data: {
    category: string
    correct_answer: string
    question: string
  }
  nextQuestion: React.Dispatch<React.SetStateAction<number>>
  writeAnswer: React.Dispatch<React.SetStateAction<string[]>>
}

export type ResultProps = {
  answers: Array<string>
}

export type AnswerProps = {
  isCorrect: boolean
  question: string
}

