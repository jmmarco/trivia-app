import React from "react";

function whatever() {
  console.log('whatever')
}

function Results({ questions, handleReset }) {
  const score = questions.reduce((acc, q) => {
    if (q.result === "correct") {
      acc += 1;
    }
    return acc;
  }, 0);


  const handleClick = event => {
    event.target.classList.toggle('hide-some-text')
    event.target.classList.toggle('show-some-text')
  }

  const scorePercentage = (score / questions.length) * 100;
  return (
    <>
      <h3>
        You answered {score} of {questions.length} questions!
      </h3>
      {score / questions.length <= 0.5 && (
        <p>That's {scorePercentage}%. You need practice!</p>
      )}
      {score / questions.length > 0.5 && score / questions.length <= 0.8 && (
        <p>That's {scorePercentage}%. Pretty good!</p>
      )}
      {score / questions.length > 0.8 && (
        <p>That's {scorePercentage}%. Excellent!</p>
      )}
      <h4 className="review-heading">Review</h4>
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
    </>
  );
}

export default Results;
