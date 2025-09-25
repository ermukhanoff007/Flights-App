import { useAppSelector } from '@/app/hooks'
import { clearCart, removeFromCart, updateQuantity } from '@/features/cart/cartSlicer'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

export const CartPage = () => {
    const items = useAppSelector(state => state.cart.items)
    const dispatch = useDispatch()

return (
    <div className="p-8 flex flex-col max-w-4xl mx-auto space-y-6">
        <div className="flex justify-between items-center border-b pb-4">
            <h2 className="text-2xl font-bold"> Ваша корзина</h2>
            {items.length > 0 && (
            <button
                onClick={() => dispatch(clearCart())}
                className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md"
            >
                Очистить корзину
            </button>
        )}
        </div>
        <div className="space-y-4">
            {items.length === 0 ? (
            <div className='flex flex-col items-center justify-center space-y-4'>
                <p className="text-gray-500 text-center">Корзина пуста</p>
                <Link to="/">
                    <p className='text-white' >Перейти к билетам</p>
                </Link>
            </div>
            ) : (
            items.map((item) => (
                <div
                key={item.id}
                className="flex flex-col md:flex-row md:items-center justify-between space-x-8 border rounded-lg p-4 shadow-sm bg-white">
                <div className="mb-3 md:mb-0">
                    <h5 className="font-semibold  text-black">{item.airlines.join(', ')}</h5>
                </div>
                <div className="flex flex-col md:flex-row md:space-x-8">
                    {item.segments.map((segment, id) => (
                    <div key={id} className="flex flex-col items-center text-sm text-gray-700">
                        <p className="font-medium">{segment.departureCity}</p>
                        <p className="text-gray-500">{segment.departureTime}</p>
                        <span className="text-xs text-gray-400">-→</span>
                        <p className="font-medium">{segment.arriveCity}</p>
                        <p className="text-gray-500">{segment.arriveTime}</p>
                    </div>
                    ))}
                </div>
                <div className="flex items-center space-x-2">
                    <button
                        onClick={() =>
                            dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))
                        }
                        className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded hover:bg-gray-300"
                        >
                        -
                    </button>
                        <span className=" w-[40px] p-3 font-semibold text-red-500">{item.quantity}</span>
                        <button
                        onClick={() =>
                            dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))
                        }
                        className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded hover:bg-gray-300"
                        >
                        +
                    </button>
                </div>
                <div className="flex items-center space-x-4">
                    <span className="font-bold p-1 w-[100px] text-lg text-green-600">
                    {item.price * item.quantity} ₸
                    </span>
                    <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="text-red-500 hover:text-red-700 text-sm"
                    >
                    Удалить
                    </button>
                </div>
                </div>
            ))
            )}
        </div>
        {items.length > 0 && (
            <div className="flex justify-between items-center border-t pt-4">
            <span className="text-xl font-bold">Общая стоимость:</span>
            <span className="text-2xl font-extrabold text-blue-600">
                {items.reduce((total, item) => total + item.price * item.quantity, 0)} ₸
            </span>
            </div>
    )}
    </div>
  )
}