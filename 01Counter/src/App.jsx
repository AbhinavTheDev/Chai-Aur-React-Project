import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(15);

  // let counter = 15

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    } else {
      alert("Counter Value can't exceed 20");
    }
  };
  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      alert('Counter Value cannot be negative.');
    }
  };

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>
      <p>{Error}</p>
      <button onClick={addValue}>Add value </button>
      <br />
      <button onClick={removeValue}>remove value </button>
      {/* <p>footer: {counter}</p> */}
    </>
  );
}

export default App;
