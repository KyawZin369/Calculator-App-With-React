import React from "react";
import './Body.css'

const Body = () => {
  return (
    <div className="buttons">
      <button onclick="appendToOutput('7')">7</button>
      <button onclick="appendToOutput('8')">8</button>
      <button onclick="appendToOutput('9')">9</button>
      <button onclick="appendToOutput('+')">+</button>
      <button onclick="appendToOutput('4')">4</button>
      <button onclick="appendToOutput('5')">5</button>
      <button onclick="appendToOutput('6')">6</button>
      <button onclick="appendToOutput('-')">-</button>
      <button onclick="appendToOutput('1')">1</button>
      <button onclick="appendToOutput('2')">2</button>
      <button onclick="appendToOutput('3')">3</button>
      <button onclick="appendToOutput('*')">*</button>
      <button onclick="appendToOutput('0')">0</button>
      <button onclick="appendToOutput('.')">.</button>
      <button onclick="clearOutput()" className="clear">
        C
      </button>
      <button onclick="calculate()" className="equals">
        =
      </button>
      <button onclick="appendToOutput('/')">/</button>
    </div>
  );
};

export default Body;
