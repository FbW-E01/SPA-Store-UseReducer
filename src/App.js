import { useReducer } from 'react';

const initialState = {
  clicks: 0, number: 0,
};

function reducer(previousState, action) {
  switch (action.type) {
    case "increment":
      return {
        clicks: previousState.clicks + 1,
        number: previousState.number + 1
      }; 
    case "decrement":
      return {
        clicks: previousState.clicks + 1,
        number: previousState.number - 1
      }; 
    case "reset":
      return initialState; 
    case "square":
      return {
        clicks: previousState.clicks + 1,
        number: previousState.number * previousState.number
      }
    case "check":
      if (previousState.number === 1337) {
        alert("You won, your score is " + previousState.clicks);
      }
      return previousState;
    default:
      alert("Unknown action!!!");
      return previousState;
  }
}

function App() {
  // while useState takes in just the initial value
  // useReducer takes in a "reducer" function and an initial state
  // as far as I have seen, the state is practically always an object
  // the "reducer" term comes from Redux

  // useReducer returns an array, like useState
  // the array contains our state variable and a function
  // the function is called dispatch and that is used to update the state
  // the dispatch function takes in an "action" that is passed into the reducer

  // useReducer hook
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <p>Try to make the number 1337 and check how many clicks does it take</p>
      Click count: {state.clicks} <br /> Number: {state.number}
      <br />
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "square" })}>square</button>
      <button onClick={() => dispatch({ type: "check" })}>check</button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </div>
  );
}

export default App;
