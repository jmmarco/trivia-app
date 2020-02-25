import React from "react";
import PropTypes from 'prop-types';

function Error({ message }) {
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

Error.propTypes = {
  message: PropTypes.string.isRequired,
};
