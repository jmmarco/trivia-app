import React from 'react';
import { fetchQuestions } from '../utils/api'

class Card extends React.Component {

  state = {
    questions: null,
    index: 0
  }

  componentDidMount(){
    fetchQuestions()
      .then(questions => {
        console.log(questions)
        this.setState({
          questions
        })
      })
  }

  next = () => {
    const { index, questions } = this.state
    index < questions.length - 1 && (
      this.setState((state) => {
        return { index: state.index + 1}
      })
    )
  }


  prev = () => {
    const { index, questions } = this.state
    index > 0 && (
      this.setState((state) => {
        return { index: state.index - 1}
      })
    )
  }

  render() {
    const { index, questions } = this.state
    return (
      <div className="card border">
        <header className="card-header">
          <h2>Entertainment: Video Games</h2>
        </header>
        <main className="card-main border">
          {/* <p >Unturned originally started as a Roblox game.</p> */}
          {questions && <p>{questions[index].question}</p>}
        <button onClick={this.prev} disabled={index === 0}>Prev</button>
        <button onClick={this.next} disabled={questions && index === questions.length -1}>Next</button>

        </main>
        <footer className="card-footer">
          {index + 1} of {questions && questions.length}
        </footer>
      </div>
    );
  }

}

export default Card;