import React from "react";
import PropTypes from 'prop-types';

function Results({ questions, handleReset }) {

  // Calculate the score from each question
  const score = questions.reduce((acc, q) => {
    if (q.result === "correct") {
      acc += 1;
    }
    return acc;
  }, 0);

  // Show review questions using CSS
  const handleClick = event => {
    event.target.classList.toggle("hide-some-text");
    event.target.classList.toggle("show-some-text");
  };

  const scorePercentage = (score / questions.length) * 100;
  return (
    <div className="card results-rows border center-flex text-center">
      <h3 className="results-heading">
        You answered {score} of {questions.length} questions!
      </h3>
      {score / questions.length <= 0.5 && (
        <p className="results-veridict">
          That's {scorePercentage}%. You need practice!
        </p>
      )}
      {score / questions.length > 0.5 && score / questions.length <= 0.8 && (
        <p className="results-veridict">
          That's {scorePercentage}%. Pretty good!
        </p>
      )}
      {score / questions.length > 0.8 && (
        <p className="results-veridict">
          That's {scorePercentage}%. Excellent!
        </p>
      )}
      <h4 className="results-heading">Review</h4>
      <div className="results-questions">
        {questions.map(q => {
          return (
            <p
              key={q.question}
              className={`results-question hide-some-text ${q.result}`}
              onClick={handleClick}
            >
              {q.question} {q.correct_answer}
            </p>
          );
        })}
      </div>
      <button className="btn-standard" onClick={handleReset}>
        Play Again!
      </button>
    </div>
  );
}

export default Results;

Results.propTypes = {
  handleReset: PropTypes.func.isRequired,
  questions: PropTypes.array.isRequired,
};