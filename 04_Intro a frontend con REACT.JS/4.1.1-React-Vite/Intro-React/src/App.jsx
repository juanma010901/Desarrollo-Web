import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function Table() {
  const tableStyle = {
    borderCollapse: "collapse",
    width: "100%",
    fontFamily: "Arial, sans-serif",
    fontSize: "16px",
    border: "1px solid black"
  };

  const tdStyle = {
    border: "1px solid black",
    textAlign: "center",
    padding: "8px"
  };

  return (
    <table style={tableStyle}>
      <thead>
        <tr>
          <th style={tdStyle}>ID</th>
          <th style={tdStyle}>Name</th>
          <th style={tdStyle}>Age</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={tdStyle}>1</td>
          <td style={tdStyle}>Juan Manuel</td>
          <td style={tdStyle}>0</td>
        </tr>
      </tbody>
    </table>
  );

}


function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <Table/>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
