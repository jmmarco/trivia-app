import React from "react";
import Loading from "./Loading";
import Error from "./Error";
import { fetchQuestions } from "../utils/api";

class Card extends React.Component {
  state = {
    questions: null,
    index: 0,
    loading: true,
    error: null
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

  render() {
    const { index, questions, loading, error } = this.state;
    return (
      <div className={`card border ${loading || error ? `center-flex` : ""}`}>
        {loading ? (
          <Loading />
        ) : error ? (
          <Error message={error} />
        ) : (
          <>
            <header className="card-header">
              <h2>{questions[index].category}</h2>
            </header>
            <main className="card-main border">
              {questions && <p>{questions[index].question}</p>}
              <button onClick={this.prev} disabled={index === 0}>
                Prev
              </button>
              <button
                onClick={this.next}
                disabled={questions && index === questions.length - 1}
              >
                Next
              </button>
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
