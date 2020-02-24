import React from "react";
import Loading from "./Loading";
import Error from "./Error";
import { fetchQuestions } from "../utils/api";
import { FiXCircle, FiCheckCircle, FiArrowLeftCircle, FiArrowRightCircle , FiThumbsUp, FiThumbsDown} from "react-icons/fi";

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

  checkAnswer = answer => {
    const { index, questions } = this.state;
    let correctAnswer = questions[index].correct_answer === 'True';
    questions[index]['result'] = correctAnswer === answer ? 'correct' : 'incorrect'

    this.setState({
      questions
    }, () => {
      setTimeout(() =>{
        this.next()
      }, 2000)
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
      
                {questions[index].result === 'correct' && <FiThumbsUp size={40} color="limegreen" />}
                {questions[index].result === 'incorrect' && <FiThumbsDown size={40} color="crimson" />}

            </header>
            <main className="card-main border">
              {questions && <p className="text-center">{questions[index].question}</p>}

              <nav className="card-nav">

                  <button
                    className={`btn-nav ${questions[index].result && 'disabled'}`}
                    disabled={questions[index].result}
                    onClick={() => this.checkAnswer(true)}
                  >
                    <FiCheckCircle size={60} />
                  </button>
                  <button
                    className={`btn-nav ${questions[index].result && 'disabled'}`}
                    disabled={questions[index].result}
                    onClick={() => this.checkAnswer(false)}
                  >
                    <FiXCircle size={60} />
                  </button>
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
