import { fetchQuestions } from '../utils/api'
import { getQuestions } from './questions'

export function handleInitialData() {
  return (dispatch) => {
    return fetchQuestions()
      .then(questions => {
        dispatch(getQuestions(questions))
      })
  }
}