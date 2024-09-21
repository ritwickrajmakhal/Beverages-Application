import React from "react";

const ErrorPage = ({msg}) => {
  return (
    <div className="error-page">
      <h3 className="text-center my-5">{msg}</h3>
    </div>
  );
};

export default ErrorPage;
