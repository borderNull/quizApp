
import { QuestionsActions, GET_QUESTIONS_REQUEST, RESET_QUESTIONS } from './types';


export const getQuestions = (difficulty: string, amount: string): QuestionsActions => ({ type: GET_QUESTIONS_REQUEST, payload: { difficulty, amount }});
export const resetQuestions = (): QuestionsActions => ({ type: RESET_QUESTIONS });