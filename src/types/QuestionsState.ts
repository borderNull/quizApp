

export interface IQuestion {
  category: string
  correct_answer: string
  difficulty: string
  incorrect_answers: Array<string>
  question: string
  type: string
}

export interface QuestionsDataState {
  questions: Array<IQuestion>
}