import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function CounterFn() {
    const [counter, setCounter] = useState(0)

    const state = useSelector((state) => state)
    const dispatch = useDispatch()

    const increment = () => {
        setCounter(counter + 1)
    }

    const incrementTen = () => {
        setCounter(counter + 10)
    }

    const decrement = () => {
        setCounter(counter - 1)
    }

    const reduxIncrement = () => {
        dispatch ({
            type: "INCREMENT"
        })
    }

    const reduxIncrementTen = () => {
        dispatch ({
            type: ("INCREMENT" + 10)
        })
    }

    const reduxDecrement = () => {
        dispatch ({
            type: "DECREMENT"
        })
    }

    return (
        <div className="col-md-6 border-end">
        <h2>Functional Component</h2>
        <h1>{counter} - {state.counter}</h1>
        <button className="btn btn-success me-3" onClick={decrement}>-</button>
        <button className="btn btn-success me-3"onClick={increment}>+</button>
        <button className="btn btn-success me-3"onClick={incrementTen}>+ 10</button>
        <hr />
        <button className="btn btn-success me-3" onClick={reduxDecrement}>-</button>
        <button className="btn btn-success me-3"onClick={reduxIncrement}>+</button>
        <button className="btn btn-success me-3"onClick={reduxIncrementTen}>+ 10</button>
        </div>
    )
}

export default CounterFn;