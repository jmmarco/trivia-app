export const GET_QUESTIONS = 'GET_QUESTIONS';
export const LOAD_QUESTIONS = 'LOAD_QUESTIONS';
export const ERROR = 'ERROR';
export const NEXT_QUESTION = 'NEXT_QUESTION';
export const ANSWER_QUESTION = 'ANSWER_QUESTION';

export function getQuestions(questions) {
  return {
    type : GET_QUESTIONS,
    questions
  }
}

export function loadQuestions(boolean) {
  return {
    type: LOAD_QUESTIONS,
    isLoading: boolean
  }
}

export function loadError(error) {
  return {
    type: ERROR,
    message: error
  }
}


export function answerQuestion(boolean) {
  return {
    type: ANSWER_QUESTION,
    answer: boolean
  }
}

export function nextQuestion(index) {
  return  {
    type: NEXT_QUESTION,
    index
  }
}

