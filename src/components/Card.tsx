import React from "react";
import Loading from "./Loading";
import Error from "./Error";
import CardBody from "./CardBody";
import Results from "./Results";
import Intro from "./Intro";
import NoMatch from "./NoMatch";
import { fetchQuestions } from "../utils/api";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./Card.css";

class Card extends React.Component {
  state = {
    completed: false,
    error: null,
    index: 0,
    intro: true,
    questions: null,
    loading: true
  };

  setQuestions = () => {
    fetchQuestions()
      .then(questions => {
        this.setState({
          questions,
          loading: false
        });
      })
      .catch(error => {
        this.setState({ loading: false, error: error });
      });
  };

  reset = () => {
    this.setState(
      {
        questions: null,
        index: 0,
        loading: true,
        error: null,
        completed: false
      },
      () => {
        this.setQuestions();
      }
    );
  };

  componentDidMount() {
    this.setQuestions();
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
    let correctAnswer = questions[index].correct_answer === "True";
    questions[index]["result"] =
      correctAnswer === answer ? "correct" : "incorrect";

    const isDone = index === questions.length - 1;

    /* 
      Call setTimeout right after initial setState to show 
      current and last question outcome.
    */
    isDone
      ? this.setState(
          {
            questions
          },
          () => {
            setTimeout(() => {
              this.setState({
                completed: isDone
              });
            }, 500);
          }
        )
      : this.setState(
          {
            questions
          },
          () => {
            setTimeout(() => {
              this.next();
            }, 500);
          }
        );
  };

  render() {
    const { index, intro, questions, loading, error, completed } = this.state;

    // Intro, Loading, Error and Card components
    return (
      <Router>
        <Switch>
          <Route path="/" exact>
            {loading ? (
              <Loading />
            ) : error ? (
              <Error errObj={error} />
            ) : completed ? (
              <Results questions={questions} handleReset={this.reset} />
            ) : intro ? (
              <Intro
                handleClick={() => this.setState({ intro: false })}
                questionsLength={questions && questions.length}
              />
            ) : (
              <CardBody
                questions={questions}
                index={index}
                checkAnswer={this.checkAnswer}
              />
            )}
          </Route>
          <Route component={NoMatch} />
        </Switch>
      </Router>
    );
  }
}

export default Card;
