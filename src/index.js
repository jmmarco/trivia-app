import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './components/Card';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import questions from './reducers/questions'

const store = createStore(questions)

console.log(store.getState())

ReactDOM.render(<Provider store={store}><Card /></Provider>, document.getElementById('root'));