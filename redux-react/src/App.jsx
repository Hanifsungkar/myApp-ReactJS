import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import CounterClass from './components/CounterClass';
import CounterFn from './components/CounterFn';

function App() {
  return (
    <div className="container">
      <div className="text-center my-3">
        <h1>Counter in ReactJS</h1>
      </div>
      <hr />
      <div className="row text-center">
       <CounterClass />
       <CounterFn />
      </div>
    </div>
  );
}

export default App