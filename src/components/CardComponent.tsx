import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { addToCart } from '@/features/cart/cartSlicer'
import { FormattedFlight } from '@/features/flights/types/formattedTypes'
import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
interface CardComponentProps {
    flight: FormattedFlight
}
export const CardComponent :React.FC <CardComponentProps> = ({ flight }) => {
    const dispatch = useAppDispatch()
    const items = useAppSelector(state=>state.cart.items)
    const handleAddToCart = () =>{
        dispatch(addToCart({...flight,quantity:1}))
        console.log("added")
    }
    const existingItem = items.find((item)=>item.id ===flight.id)

    
return (
<div className='p-4 border rounded-xl'>
    <div className='flex flex-col p-5 space-y-4 border  bg-gray-100 border-green-100 rounded-xl'>
        <h3 className='text-black'>{flight.airlines.join(", ")} </h3>
        <div className='flex flex-row items-center space-x-4 justify-between'>
            <div className='flex flex-col space-y-4'>
                {flight.segments.map((segment, id) => (
                <div key={id} className="flex items-center justify-center w-full space-x-6">
                    <div className=' p-2 flex flex-col w-[150px]   bg-green-100 border rounded-xl'>
                        <p className='text-black'>{segment.departureTime}</p>
                        <span className='text-black'>{segment.departureCity}</span>
                    </div>
                    <div className=' p-2 flex flex-col w-[150px]   bg-green-100 border rounded-xl'>
                        <p className='text-black'>{segment.arriveTime}</p>
                        <span className='text-black'> {segment.arriveCity}</span>
                    </div>
                    <div>
                        <p className='text-black p-2 flex flex-col w-[150px]   bg-amber-400 rounded-xl'>{segment.duration} </p>
                    </div>
                </div>
                ))}
            </div>
            { existingItem ? (
                <button className='p-2 border rounded-xl w-[150px] font-bold bg-amber-500 text-xs hover:bg-amber-800'>   
                    <div className='flex flex-col'>
                        <span>Уже в корзине</span>
                    </div>
                </button>
            ):( <button className='p-2 border rounded-xl w-[150px] font-bold bg-amber-500 text-xs hover:bg-amber-800'
                    onClick={handleAddToCart}>
                    <div className='flex flex-col'>
                        <span>Купить</span>
                        {flight.price} ₸
                    </div>
                </button>)}
        </div>
    </div>
</div>
)
}