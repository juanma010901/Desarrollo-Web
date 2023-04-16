import { useEffect, useState } from 'react';
import './style.css'

/*
Los hooks son funciones que permiten "engancharse" a los componentes de 
React para acceder a ciertas funcionalidades, como el estado o el ciclo 
de vida del componente, desde componentes funcionales. 
*/

function NormalClock() {

    const [hours, setHours] = useState('00')
    const [minutes, setMinutes] = useState('00')
    const [seconds, setSeconds] = useState('00')

    useEffect(() => {
        const interval = setInterval(() => {
            const date = new Date()
            const h = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()
            const m = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
            const s = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds()
            setHours(h)
            setMinutes(m)
            setSeconds(s)
        }, 1000)

        return () => {clearInterval(interval)}

    }, [hours, minutes, seconds])

    return (
        <div className='clock'>
            <div className='progress-go' />
            <p className='status'>Reloj</p>
            <span>
                <span className='hour'>{hours}:</span>
                <span className='minute'>{minutes}:</span>
                <span className='minute'>{seconds}</span>
            </span>
        </div>
    )
}

export default NormalClock