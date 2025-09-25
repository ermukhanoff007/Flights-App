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
    <div className='p-4 border rounded-xl'>
        <div className='flex flex-col space-y-4  rounded-xl'>
    {airlines && 
        <div className='flex flex-col p-6 border bg-gray-100 border-green-200 rounded-xl'>
        <h2 className='mb-4 text-black'>Авиакомпания</h2>
        <div className='flex flex-col items-start space-y-3'>
            {airlines.map(airline => (
            <label  className="text-black"key={airline.iata} onClick={() => toggleAirLine(airline.name)}>
                <input className="mr-2 text-black" type="checkbox" />
                {airline.name}
            </label>
            ))}
        </div>
        </div>
    }
        </div>
    </div>
)
}