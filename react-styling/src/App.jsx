// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

const divStyle = {
  backgroundColor: "#A64D79",
  color: "#fff",
  padding: "20px"
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div style={{
      backgroundColor: "#eee",
      padding: "30px",
      fontFamily: "Arial"
      }}>
      <h1>Hello World 2021, inline CSS</h1>
    </div>

    <hr />

    <div style={divStyle}>
      <h1>Object Variable CSS</h1>
    </div>
    </>
   
  )
}

export default App
