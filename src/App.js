// import React from "react";
// import magicBall from "./magicBall";

// function App() {
//     return(
//         <div className="App">
//             <magicBall />
//         </div>
//     )
// }

// export default App;


import React, { useState } from "react";
import "./styles.css";

// App component
const App = () => {
  return <EightBall />;
};

// EightBall component
const EightBall = () => {
  // Define the initial state
  const [message, setMessage] = useState("Think of a Question");
  const [color, setColor] = useState("black");

  // Define the array of answers
  const answers = [
    { msg: "It is certain.", color: "green" },
    { msg: "It is decidedly so.", color: "green" },
    { msg: "Without a doubt.", color: "green" },
    { msg: "Yes - definitely.", color: "green" },
    { msg: "You may rely on it.", color: "green" },
    { msg: "As I see it, yes.", color: "green" },
    { msg: "Most likely.", color: "green" },
    { msg: "Outlook good.", color: "green" },
    { msg: "Yes.", color: "green" },
    { msg: "Signs point to yes.", color: "goldenrod" },
    { msg: "Reply hazy, try again.", color: "goldenrod" },
    { msg: "Ask again later.", color: "goldenrod" },
    { msg: "Better not tell you now.", color: "goldenrod" },
    { msg: "Cannot predict now.", color: "goldenrod" },
    { msg: "Concentrate and ask again.", color: "goldenrod" },
    { msg: "Don't count on it.", color: "red" },
    { msg: "My reply is no.", color: "red" },
    { msg: "My sources say no.", color: "red" },
    { msg: "Outlook not so good.", color: "red" },
    { msg: "Very doubtful.", color: "red" }
  ];

  // Function to handle click event
  const handleClick = () => {
    // Choose a random answer
    const randomIndex = Math.floor(Math.random() * answers.length);
    const randomAnswer = answers[randomIndex];

    // Update the message and color state
    setMessage(randomAnswer.msg);
    setColor(randomAnswer.color);
  };

  return (
    <div
      className="eight-ball"
      style={{ backgroundColor: color }}
      onClick={handleClick}
    >
      <p className="message">{message}</p>
    </div>
  );
};

export default App;


