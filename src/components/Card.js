import React from "react";
import Loading from "./Loading";
import Results from "./Results";
import CardBody from "./CardBody";
import Intro from "./Intro";
import Error from "./Error";
import { handleInitialData } from "../actions/shared";
import {
  updateQuestion,
  nextQuestion,
  finishQuestions,
  startQuestions,
  isLoading,
  reset
} from "../actions/questions";
import { connect } from "react-redux";
import "./Card.css";

class Card extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  checkAnswer = answer => {
    const { index, questions, dispatch } = this.props;
    let correctAnswer = questions[index].correct_answer === "True";
    questions[index]["result"] =
      correctAnswer === answer ? "correct" : "incorrect";

    const isDone = index === questions.length - 1;

    if (isDone) {
      dispatch(updateQuestion(questions[index]));
      setTimeout(() => {
        dispatch(finishQuestions());
      }, 1000);
    } else {
      dispatch(updateQuestion(questions[index]));
      setTimeout(() => {
        dispatch(nextQuestion(index));
      }, 1000);
    }
  };

  render() {
    const {
      questions,
      loading,
      completed,
      intro,
      error,
      dispatch
    } = this.props;

    if (intro) {
      return (
        <Intro
          questionsLength={questions && questions.length}
          handleClick={() => dispatch(startQuestions())}
        />
      );
    }

    if (error) {
      return <Error message={error.message} />;
    }

    if (completed) {
      return (
        <Results
          questions={questions}
          handleReset={() => {
            dispatch(reset());
            dispatch(isLoading(true))
            setTimeout(() => {
              dispatch(handleInitialData());
            }, 2000)

          }}
        />
      );
    }

    if (loading) {
      return <Loading />;
    }

    if (questions) {
      return <CardBody {...this.props} checkAnswer={this.checkAnswer} />;
    }
  }
}

function mapStateToProps({questions, loading, error, index, intro, completed }) {
  return {
    questions,
    loading,
    error,
    index,
    intro,
    completed
  };
}

export default connect(mapStateToProps)(Card);
