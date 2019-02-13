import React from "react";

function Joke(props) {
  let question = props.joke.question;
  if (question == null) {
    question = "Default";
  }

  return (
    <div>
      Question: {question}
      <br />
      PunchLine: {props.joke.punchLine}
    </div>
  );
}

export default Joke;
