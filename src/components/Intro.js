import React from 'react'

function Intro({ handleClick, questionsLength }) {
  return (
    <>
      <h1>Welcome to the Trivia Challenge!</h1>
      <p>You will be presented with {questionsLength} True or False questions.</p>
      <p>Can you score 100%?</p>
      <button className="btn-standard" onClick={handleClick}>begin</button>
    </>
  )
}

export default Intro