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
      dispatch,
      index
    } = this.props;

    if (loading) {
      return <Loading />;
    }

    if (error) {
      return <Error errObj={error} />;
    }

    if (completed) {
      return (
        <Results
          questions={questions}
          handleReset={() => {
            dispatch(reset());
            dispatch(handleInitialData(startQuestions()));
          }}
        />
      );
    }

    if (intro) {
      return (
        <Intro
          handleClick={() => dispatch(startQuestions())}
          questionsLength={questions && questions.length}
        />
      );
    } else {
      return (
        <CardBody
          questions={questions}
          index={index}
          checkAnswer={this.checkAnswer}
        />
      );
    }
  }
}

function mapStateToProps({
  questions,
  loading,
  error,
  index,
  intro,
  completed
}) {
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
