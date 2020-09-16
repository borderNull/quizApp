import { IQuestion } from '../../types/QuestionsState';


export const GET_QUESTIONS_REQUEST = 'GET_QUESTIONS_REQUEST';
export const GET_QUESTIONS_SUCCESS = 'GET_QUESTIONS_SUCCESS';
export const RESET_QUESTIONS = 'RESET_QUESTIONS';


export interface GetQuestions {
  type: typeof GET_QUESTIONS_REQUEST
  payload: { difficulty: string, amount: string }
}

export interface SuccessQuestions {
  type: typeof GET_QUESTIONS_SUCCESS
  payload: Array<IQuestion>
}

export interface ResetQuestions {
  type: typeof RESET_QUESTIONS
}

export type QuestionsActions = GetQuestions | SuccessQuestions | ResetQuestions;