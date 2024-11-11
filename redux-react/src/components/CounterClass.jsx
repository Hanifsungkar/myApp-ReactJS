import React from 'react';
import {connect} from 'react-redux';
import App from '../App';

 class CounterClass extends React.Component {
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
            counter: this.state.counter + 10
        })
    }

    reduxIncrement = () => {
        this.props.dispatch ({
            type: 'INCREMENT'
        })
    }

    reduxNewIncrement = () => {
        this.props.dispatch ({
            type: ('INCREMENT' + 10)
        })
    }

    reduxDecrement = () => {
        this.props.dispatch ({
            type: 'DECREMENT'
        })
    }
    
    render() {
        return (
            <div className="col-md-6">
          <h2>Class Component</h2>
          <h1>{this.state.counter} - {this.props.globalCounter}</h1>
          <button className="btn btn-primary me-3" onClick={this.decrement}>-</button>
          <button className="btn btn-primary me-3" onClick={this.increment}>+</button>
          <button className="btn btn-primary me-3" onClick={this.newIncrement}>+ 10</button>
          <hr />
          <button className="btn btn-dark me-3" onClick={this.reduxDecrement}>-</button>
          <button className="btn btn-dark me-3" onClick={this.reduxIncrement}>+</button>
          <button className="btn btn-dark me-3" onClick={this.reduxNewIncrement}>+ 10</button>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        globalCounter: state.counter
    }
}

export default connect (mapStateToProps) (CounterClass)