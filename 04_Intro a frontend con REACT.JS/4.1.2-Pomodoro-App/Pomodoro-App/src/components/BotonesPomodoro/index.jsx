import { useState, useEffect } from 'react';
import './style.css'

function BotonesPomodoro(props) {
    
    const [timePomodoroInput, setTimePomodoroInput] = useState(25) 


    const onSubmitHandle = (e) => {
        e.preventDefault()
        //1. Obtener el momento en el que le damos submit al formulario
        const timeFinal = new Date().getTime()
        //2. Guardar el numero de minutos que el usuario seleccionó
        props.setSettingsPropiedad({timeFinal, timePomodoroInput})
    }

    return (
        <form className='seetings' onSubmit={onSubmitHandle}>
            <label>Tiempo</label>
            <input type="number" max={60} min={0} defaultValue={timePomodoroInput} onChange={(e) =>{
                setTimePomodoroInput(e.target.value)
            }}/>
            <button className='btn'>Iniciar Reloj</button>
        </form>
    )
}
export default BotonesPomodoro