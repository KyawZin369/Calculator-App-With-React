import React from "react";
import './Body.css'

const Body = ({EventHandling}) => {
  return (
    <div className="buttons">
      <button onClick={(e)=>EventHandling(e.target.innerText)}>7</button>
      <button onClick={(e)=>EventHandling(e.target.innerText)}>8</button>
      <button onClick={(e)=>EventHandling(e.target.innerText)}>9</button>
      <button onClick={(e)=>EventHandling(e.target.innerText)}>+</button>
      <button onClick={(e)=>EventHandling(e.target.innerText)}>4</button>
      <button onClick={(e)=>EventHandling(e.target.innerText)}>5</button>
      <button onClick={(e)=>EventHandling(e.target.innerText)}>6</button>
      <button onClick={(e)=>EventHandling(e.target.innerText)}>-</button>
      <button onClick={(e)=>EventHandling(e.target.innerText)}>1</button>
      <button onClick={(e)=>EventHandling(e.target.innerText)}>2</button>
      <button onClick={(e)=>EventHandling(e.target.innerText)}>3</button>
      <button onClick={(e)=>EventHandling(e.target.innerText)}>*</button>
      <button onClick={(e)=>EventHandling(e.target.innerText)}>0</button>
      <button onClick={(e)=>EventHandling(e.target.innerText)}>.</button>
      <button onClick={(e)=>EventHandling(e.target.innerText)} className="clear">
        C
      </button>
      <button onClick={(e)=>EventHandling(e.target.innerText)}>
        D
      </button>
      <button onClick={(e)=>EventHandling(e.target.innerText)} className="equals">
        =
      </button>
      <button onClick={(e)=>EventHandling(e.target.innerText)}>/</button>
    </div>
  );
};

export default Body;
