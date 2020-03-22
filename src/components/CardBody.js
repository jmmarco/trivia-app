import React from "react";
import {
  FiXCircle,
  FiCheckCircle,
  FiSmile,
  FiFrown
} from "react-icons/fi";
import PropTypes from "prop-types";

function CardBody({ questions, index, checkAnswer }) {
  return (
    <div className="card grid-rows-questions-rows">
      <header>
        <h2 className="font-bold tracking-wide text-4xl uppercase">{questions && questions[index].category}</h2>
      </header>
      <div className="flex-center-all">
        {questions[index].result === "correct" && (
          <FiSmile size={60} color="limegreen" />
        )}
        {questions[index].result === "incorrect" && (
          <FiFrown size={60} color="crimson" />
        )}
      </div>
      <main className="overflow-auto border-4 p-2 rounded-lg border-gray-400 shadow flex-center-all">
        {questions && (
          <p className="text-2xl">{questions[index].question}</p>
        )}
      </main>
      <nav className="flex self-center justify-around ">
        <button
          className={`${questions[index].result && "opacity-50 cursor-not-allowed"} hover:text-gray-400 focus:outline-none focus:shadow-outline rounded-full`}
          disabled={questions[index].result}
          onClick={() => checkAnswer(true)}
        >
          <FiCheckCircle size={60} />
        </button>
        <button
          className={`${questions[index].result && "opacity-50 cursor-not-allowed"} hover:text-gray-400 focus:outline-none focus:shadow-outline rounded-full`}
          disabled={questions[index].result}
          onClick={() => checkAnswer(false)}
        >
          <FiXCircle size={60} />
        </button>
      </nav>
      <footer className="self-center text-5xl font-semibold">
        {index + 1} of {questions && questions.length}
      </footer>
    </div>
  );
}

export default CardBody;

CardBody.propTypes = {
  index: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
  checkAnswer: PropTypes.func.isRequired
};
