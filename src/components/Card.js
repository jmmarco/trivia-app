import React from "react";
import Loading from "./Loading";
import Error from "./Error";
import { fetchQuestions } from "../utils/api";
import { FiXCircle, FiCheckCircle, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";

class Card extends React.Component {
  state = {
    questions: null,
    index: 0,
    loading: true,
    error: null,
  };

  componentDidMount() {
    fetchQuestions()
      .then(questions => {
        this.setState({
          questions,
          loading: false
        });
      })
      .catch(error => {
        this.setState({ loading: false, error: error.message });
      });
  }

  next = () => {
    const { index, questions } = this.state;
    index < questions.length - 1 &&
      this.setState(state => {
        return { index: state.index + 1 };
      });
  };

  prev = () => {
    const { index } = this.state;
    index > 0 &&
      this.setState(state => {
        return { index: state.index - 1 };
      });
  };

  checkAnswer = answer => {
    const { index, questions } = this.state;
    let correctAnswer = questions[index].correct_answer === 'True';
    console.log('The correct answer is: ', correctAnswer, typeof correctAnswer)
    console.log('The players answer was: ', answer, typeof answer)
    questions[index]['result'] = correctAnswer === answer ? 'correct' : 'incorrect'

    this.setState({
      questions
    }, () => {
      console.log(this.state.questions)
    })

  };

  render() {
    const { index, questions, loading, error, result } = this.state;
    return (
      <div className={`card border ${loading || error ? `center-flex` : ""}`}>
        {loading ? (
          <Loading />
        ) : error ? (
          <Error message={error} />
        ) : (
          <>
            <header className="card-header">
              <h2>{questions && questions[index].category}</h2>
              <p className="small-text">{JSON.stringify(result)}</p>
              <p className="small-text">{JSON.stringify(index ,result)}</p>
              <p>
                {questions[index].result
                  ? questions[index].result
                  : null}
              </p>
            </header>
            <main className="card-main border">
              {questions && <p className="text-center">{questions[index].question}</p>}

              <nav className="card-nav">
                <div>
                  <button className={`btn-nav ${index === 0 && 'disabled'}`} onClick={this.prev} disabled={index === 0}>
                    <FiArrowLeftCircle size={40}/>
                  </button>
                  <button
                    className={`btn-nav ${index === questions.length - 1 && 'disabled'}`} onClick={this.next}
                    disabled={questions && index === questions.length - 1}
                  >
                    <FiArrowRightCircle size={40}/>
                  </button>
                </div>
                <div>
                  <button
                    className={`btn btn-answer ${questions[index].result && 'disabled'}`}
                    disabled={questions[index].result}
                    onClick={() => this.checkAnswer(true)}
                  >
                    true
                  </button>
                  <button
                    className={`btn btn-answer ${questions[index].result && 'disabled'}`}
                    disabled={questions[index].result}
                    onClick={() => this.checkAnswer(false)}
                  >
                    false
                  </button>
                </div>
              </nav>
            </main>
            <footer className="card-footer">
              {index + 1} of {questions && questions.length}
            </footer>
          </>
        )}
      </div>
    );
  }
}

export default Card;
