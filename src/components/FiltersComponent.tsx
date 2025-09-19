import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setAirlines } from '@/features/flights/flightSlice'
interface IAirlines {
    airlines: { iata: string; name: string }[]
}
export const FiltersComponents :React.FC <IAirlines> = ({ airlines }) => {
const dispatch = useDispatch()
const [chosenAirLine, setChosenAirLine] = useState<string[]>([])

const toggleAirLine = (airlinesName: string) => {
    let updated
    if (chosenAirLine.includes(airlinesName)) {
    updated = chosenAirLine.filter(a => a !== airlinesName)
    } else {
    updated = [...chosenAirLine, airlinesName]
    }
    setChosenAirLine(updated)
}

useEffect(() => {
    dispatch(setAirlines(chosenAirLine))
}, [chosenAirLine, dispatch])

return (
    <div className='flex flex-col space-y-4'>
    {airlines && 
        <div className='flex flex-col p-6 border border-green-200 rounded-xl'>
        <h2 className='mb-4'>Авиакомпания</h2>
        <div className='flex flex-col items-start space-y-3'>
            {airlines.map(airline => (
            <label key={airline.iata} onClick={() => toggleAirLine(airline.name)}>
                <input className="mr-2" type="checkbox" />
                {airline.name}
            </label>
            ))}
        </div>
        </div>
    }
    </div>
)
}