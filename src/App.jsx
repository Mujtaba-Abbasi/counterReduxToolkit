import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset, incrementByAmount, decrementByAmount } from './features/counterSlice';
import './App.css'

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const [amount, setAmount] = useState(0);
  const [decAmount, setDecAmount] = useState(0);

  const addVal = Number(amount) || 0;
  const decVal = Number(decAmount) || 0;

  const resetAll = () => {
    setAmount(0);
    setDecAmount(0)
    dispatch(reset());
  }

  return (
    <div className="App">
      <h1>A Counter App</h1>
      <p className="read-the-docs">
        Count: {count}
      </p>
      <div className="card">
        <button onClick={() => dispatch(increment())}>
          Increment
        </button>
        <button onClick={() => dispatch(decrement())}>
          Decrement
        </button>
        <button onClick={resetAll}>
          Reset Val
        </button>
      </div>

      <div className='inputWrapper'>
        <input type="text" className='input' value={amount} onChange={(e) => setAmount(e.target.value)} />
        <button onClick={() => {
          dispatch(incrementByAmount(addVal))
        }}>
          + Amount
        </button>
      </div>

      <div className='inputWrapper'>
        <input type="text" className='input' value={decAmount} onChange={(e) => setDecAmount(e.target.value)} />
        <button onClick={() => {
          dispatch(decrementByAmount(decAmount))
        }}>
          - Amount
        </button>
      </div>
    </div >
  )
}

export default App
