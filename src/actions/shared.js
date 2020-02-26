import { fetchQuestions } from '../utils/api'
import { getQuestions, loadQuestions, loadError } from './questions'


export function handleInitialData() {
  return (dispatch) => {
    return fetchQuestions()
      .then(questions => {
        dispatch(loadQuestions(true))
        dispatch(getQuestions(questions))
        dispatch(loadQuestions(false))
      })
      .catch(error => {
        dispatch(loadQuestions(false))
        dispatch(loadError(error))
      })
  }
}


