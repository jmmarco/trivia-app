import React from "react";
import PropTypes from "prop-types";

function Intro({ handleClick, questionsLength }) {
  return (
    <div className="card border intro-rows text-center">
      <h1>Welcome to the Trivia Challenge!</h1>
      <p>
        You will be presented with {questionsLength} True or False questions.
      </p>
      <p>Can you score 100%?</p>
      <button className="btn-standard" onClick={handleClick}>
        begin
      </button>
    </div>
  );
}

export default Intro;

Intro.propTypes = {
  handleClick: PropTypes.func.isRequired,
  questionsLength: PropTypes.number
};
