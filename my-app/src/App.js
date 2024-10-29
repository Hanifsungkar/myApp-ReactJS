import 'bootstrap/dist/css/bootstrap.min.css';
import CounterClass from './components/CounterClass';
import CounterFunc from './components/CounterFunc';

function App() {
  return (
    <div className="container">
      <div className="text-center my-3">
        <h1>Counter in ReactJS</h1>
      </div>
      <hr />
      <div className="row text-center">
       <CounterFunc />
       <CounterClass />
      </div>
    </div>
  );
}

export default App;






// import logo from './logo.svg';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn belajaaar!!!!
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;