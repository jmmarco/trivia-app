import React from "react";

interface ErrorProps {
  message:string
}

function Error({ message }: ErrorProps) {
  return (
    <div className="card border center-flex text-center">
      <p>
        Something went wrong: {message}.<br />
        Please try again later.
      </p>
    </div>
  );
}

export default Error;