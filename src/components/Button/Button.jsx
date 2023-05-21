import React from "react";

const Button = ({ content, classes }) => {
  return <button className={`${classes}`}>{content}</button>;
};

export default Button;
