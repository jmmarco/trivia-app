import React from 'react'

function Error({ message }) {
  console.log(message)
  return (
  <p className="text-center">Something went wrong: {message}.<br/>Please try again later.</p>
  )
}


export default Error