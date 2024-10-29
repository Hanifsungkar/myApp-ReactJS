import { useState } from "react";

function CounterFunc() {
    const [counter, setCounter] = useState(0)

    const increment = () => {
        setCounter(counter + 1)
    }

    const decrement = () => {
        setCounter(counter - 1)
    }

    const newIncrement = () => {
        setCounter(counter + 5)
    }

    const newDecrement = () => {
        setCounter(counter - 5)
    }

    const reset = () => {
        setCounter(0)
    }

    return (
        <div className="col-md-6 border-end">
        <h2>Functional Component</h2>
        <h1>{counter}</h1>
        <button className="btn btn-success me-3" onClick={decrement}>-</button>
        <button className="btn btn-success me-3"onClick={increment}>+</button>
        <button className="btn btn-success me-3"onClick={newIncrement}>+ 5</button>
        <button className="btn btn-success me-3"onClick={newDecrement}>- 5</button>
        <button className="btn btn-success" onClick={reset}>Reset</button>
        </div>
    )
}

export default CounterFunc;