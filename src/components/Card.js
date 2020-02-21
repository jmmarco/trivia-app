import React from 'react';
import { fetchQuestions } from '../utils/api'

class Card extends React.Component {

  state = {
    questions: null
  }

  componentDidMount(){
    fetchQuestions()
      .then(questions => {
        this.setState({
          questions
        })
      })
  }

  render() {
    const { questions } = this.state
    return (
      <div className="card border">
        <header className="card-header">
          <h2>Entertainment: Video Games</h2>
        </header>
        <main className="card-main border">
          <p >Unturned originally started as a Roblox game.</p>
    {questions && questions.map(q => <p key={q.question}>{q.question}</p>)}

        </main>
        <footer className="card-footer">
          {1} of {10}
        </footer>
      </div>
    );
  }

}

export default Card;