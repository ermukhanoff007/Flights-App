import { FormattedFlight } from '@/features/flights/types/formattedTypes'
import React from 'react'
interface CardComponentProps {
    flight: FormattedFlight
}
export const CardComponent :React.FC <CardComponentProps> = ({ flight }) => {
return (
<div className='flex flex-col p-5 space-y-4 border border-green-100 rounded-xl'>
    <h3>{flight.airlines.join(", ")} </h3>
    <div className='flex flex-row items-center space-x-4 justify-between'>
        <div className='flex flex-col space-y-4'>
            {flight.segments.map((segment, id) => (
            <div key={id} className="flex items-center justify-center w-full space-x-6">
                <div className='flex flex-col w-[150px]'>
                    <p>{segment.departureTime}</p>
                <span>{segment.departureCity}</span>
                </div>
                <div className='flex flex-col w-[150px]'>
                    <p>{segment.arriveTime}</p>
                    <span>{segment.arriveCity}</span>
                </div>
                <div>
                    <p>{segment.duration} </p>
                </div>
            </div>
            ))}
        </div>
        <button className=' w-[150px] font-bold bg-amber-500 text-xs hover:bg-amber-800'>
            <div className='flex flex-col'>
                <span>Купить</span>
                {flight.price} ₸
            </div>
        </button>
    </div>
</div>
)
}