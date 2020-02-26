import { GET_QUESTIONS, LOAD_QUESTIONS, ERROR, NEXT_QUESTION, ANSWER_QUESTION } from '../actions/questions'


export function questions(state = [], action) {
  console.log(state)
  switch(action.type) {
    case GET_QUESTIONS:
      return action.questions
    case ANSWER_QUESTION:
      debugger;

    default:
      return state
  }
}

export function loading(state = true, action) {
  switch(action.type) {
    case LOAD_QUESTIONS:
      return action.isLoading
    default:
      return state
  }
}

export function error(state = null, action ){
  switch(action.type) {
    case ERROR:
      return action.message
    default:
      return state
  }
}

export function index(state = 0, action){
  switch(action.type) {
    case NEXT_QUESTION:
      return action.index + 1
    default:
      return state
  }
}