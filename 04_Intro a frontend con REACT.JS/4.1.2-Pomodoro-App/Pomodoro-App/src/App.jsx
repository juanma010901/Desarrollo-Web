import './App.css'
import NormalClock from './components/NormalClock'
import PomodoroClock from './components/PomodoroClock'
import BotonesPomodoro from './components/BotonesPomodoro'
import { useState } from 'react'

function App() {
const [pomodoro, setPomodoro] = useState(false)
const [settings, setSettings] = useState({
  timeFinal: 0,
  timePomodoroInput: '0'
})

const mostrarPomodoro = () => {
  if (pomodoro){
    return <>
      <PomodoroClock settings={settings}/>
      <BotonesPomodoro setSettingsPropiedad={setSettings}/>
    </>
  } else {
    return <>
    <NormalClock/>
    </>
  }
}

const togglePomodoro = () => {
  // if (pomodoro){
  //   setPomodoro(false)
  // } else {
  //   setPomodoro(true)
  // }

  setPomodoro(!pomodoro)
}

  return (
    <div className="App">
      <div className="options">
        <button className="btn" onClick={togglePomodoro}>
          {!pomodoro ? 'Pomodoro' : 'Reloj'}
        </button>
      </div>
      {/* <NormalClock/> */}
      {/* <PomodoroClock settings={settings}/>
      <BotonesPomodoro setSettingsPropiedad={setSettings}/> */}

      {mostrarPomodoro()}
    </div>
  )
}
export default App
