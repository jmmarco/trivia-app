import React from "react";

function Results({ questions, handleReset }) {
  const score = questions.reduce((acc, q) => {
    if (q.result === "correct") {
      acc += 1;
    }
    return acc;
  }, 0);

  return (
    <>
      <p>
        You answered {score} of {questions.length} questions!
      </p>
      {score / questions.length <= 0.5 && <p>You need practice!</p>}
      {score / questions.length > 0.5 && score / questions.length <= 0.8 && (
        <p>Pretty good!</p>
      )}
      {score / questions.length > 0.8 && <p>Excellent!</p>}
      <button className="btn-reset" onClick={handleReset}>
        Play Again!
      </button>
    </>
  );
}

export default Results;
