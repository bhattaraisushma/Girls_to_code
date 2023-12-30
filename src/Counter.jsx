import React, { useState } from 'react';

const Counter = (data) => {
  const [count, setCount] = useState(0);
  const [buttonClicked, setButtonClicked] = useState(false);
  console.log(data)
  const increment = () => {
    setCount(count + 1);
    setButtonClicked(true);

  };

  const decrement = () => {
    setCount(count - 1);
    setButtonClicked(true);

  };

  return (
    <div>
      <h2>{data.name}</h2>


      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      {buttonClicked? <p>Button Clicked!</p>:<p></p>}

    </div>
  );
};

export default Counter;