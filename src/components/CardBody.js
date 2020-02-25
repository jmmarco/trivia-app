import React from "react";
import {
  FiXCircle,
  FiCheckCircle,
  FiThumbsUp,
  FiThumbsDown
} from "react-icons/fi";

function CardBody({ questions, index, checkAnswer }) {
  return (
    <>
      <header className="card-header">
        <h2>{questions && questions[index].category}</h2>

        {questions[index].result === "correct" && (
          <FiThumbsUp size={40} color="limegreen" />
        )}
        {questions[index].result === "incorrect" && (
          <FiThumbsDown size={40} color="crimson" />
        )}
      </header>
      <main className="card-main">
        {questions && (
          <p className="text-center">{questions[index].question}</p>
        )}

        <nav className="card-nav">
          <button
            className={`btn-nav ${questions[index].result && "disabled"}`}
            disabled={questions[index].result}
            onClick={() => checkAnswer(true)}
          >
            <FiCheckCircle size={60} />
          </button>
          <button
            className={`btn-nav ${questions[index].result && "disabled"}`}
            disabled={questions[index].result}
            onClick={() => checkAnswer(false)}
          >
            <FiXCircle size={60} />
          </button>
        </nav>
      </main>
      <footer className="card-footer">
        {index + 1} of {questions && questions.length}
      </footer>
    </>
  );
}

export default CardBody;
