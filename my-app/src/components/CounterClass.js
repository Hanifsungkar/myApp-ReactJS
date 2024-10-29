import React from 'react';

export default class CounterClass extends React.Component {
    constructor() {
        super()
        this.state = {
            counter: 0
        }
    }

    increment = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    decrement = () => {
        this.setState({
            counter: this.state.counter - 1
        })
    }

    newIncrement = () => {
        this.setState({
            counter: this.state.counter + 5
        })
    }

    newDecrement = () => {
        this.setState({
            counter: this.state.counter - 5
        })
    }

    reset = () => {
        this.setState({
            counter: 0
        })
    }
    

    render() {
        return (
            <div className="col-md-6">
          <h2>Class Component</h2>
          <h1>{this.state.counter}</h1>
          <button className="btn btn-primary me-3" onClick={this.decrement}>-</button>
          <button className="btn btn-primary me-3" onClick={this.increment}>+</button>
          <button className="btn btn-primary me-3" onClick={this.newDecrement}>- 5</button>
          <button className="btn btn-primary me-3" onClick={this.newIncrement}>+ 5</button>
          <button className="btn btn-primary" onClick={this.reset}>Reset</button>
        </div>
        )
    }
}