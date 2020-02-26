import { combineReducers } from 'redux'
import  { questions, loading, error, index } from './questions'

export default combineReducers({
  questions,
  loading,
  error,
  index
})