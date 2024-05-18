import "./App.css";
import Body from "./components/Body";
import Input from "./components/Input";
import Output from "./components/Output";
import { useState } from "react";

function App() {
  const [input, setInputState] = useState(0);
  const [output, setOutputState] = useState(0);

  function EventHandling(value) {
    if (value === "C") {
      setOutputState(0);
      setInputState(0);
    } else if (value === "D") {
      if (input !== 0) {
        input.length === 1
          ? setInputState(0)
          : setInputState(input.slice(0, input.length - 1));
      }
    } else if (value === "=") {
      if (
        input !== "+" &&
        input !== "-" &&
        input !== "*" &&
        input !== "/" &&
        input !== "."
      ){
        setOutputState(eval(input))
        setInputState(0);
      }
    } else {
      input == 0 ? setInputState(value) : setInputState(input + value);
    }
  }

  return (
    <div className="calculator">
      <Input input={input} />
      <Output output={output} />
      <Body EventHandling={EventHandling} />
    </div>
  );
}

export default App;
