import { useAppSelector } from '@/app/hooks'
import { FC } from 'react'
import { Link } from 'react-router-dom'

export const CartModalView : FC = () => {
    
    const flights = useAppSelector(state=>state.cart.items)
    
  return (
        <div className='p-4 border rounded-xl mt-4'>
            <div className=' flex flex-col  p-4 items-start justify-center border-green-100 border rounded-2xl  bg-gray-100'>
                <h4 className='text-black  font-bold' >Вы купили билетов на сумму : </h4>
                <p className='p-1 border text-black border-black bg-gray-100  mt-2 font-extrabold' >{flights.reduce((total,flight) => total+flight.price * flight.quantity,0)} ₸</p>
                <Link className= "mt-2 hover:bg-green-500 bg-green-600 p-1.5 rounded-xl" to ="/cart">
                    <p className='text-white '>Перейти в корзину</p>
                </Link>
                
            </div>
        </div>
  )
}
