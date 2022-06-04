import React from 'react';

const Error = ({ errorMessage }) => {
  return (
    <div className="container">
      <h2 className="error">{errorMessage}</h2>
    </div>
  );
};

export default Error;
