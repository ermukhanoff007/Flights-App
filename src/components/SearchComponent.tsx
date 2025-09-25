import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setCityFrom, setCityTo, setDateTo, setDateReturn } from '@/features/flights/flightSlice'
import { Link } from 'react-router-dom'

export const SearchComponent = () => {
    const dispatch = useDispatch()
    const [cityFrom, setFrom] = useState('')
    const [cityTo, setTo] = useState('')
    const [dateReturn, setReturn] = useState('')
    const [dateTo, setDate] = useState('')

    const handleSearch = () => {
        dispatch(setCityFrom(cityFrom))
        dispatch(setCityTo(cityTo))
        dispatch(setDateTo(dateTo))
        dispatch(setDateReturn(dateReturn))
    }

    return (
        <div className='flex items-center p-4 border rounded-xl space-x-4'>
        <input type="text" onChange={(e)=>setFrom(e.target.value)} className='p-4 border border-green-200 rounded-xl  bg-gray-100  placeholder:text-gray-400 text-black' placeholder='Откуда'/>
        <input type="text" onChange={(e)=>setTo(e.target.value)} className='p-4 border border-green-200 rounded-xl  bg-gray-100  placeholder:text-gray-400 text-black' placeholder='Куда'/>
        <input type="time" onChange={(e)=>setDate(e.target.value)} className='p-4 border border-green-200 rounded-xl  bg-gray-100  placeholder:text-gray-400 text-black' placeholder='Время Туда'/>
        <input type="time" onChange={(e)=>setReturn(e.target.value)} className='p-4 border border-green-200 rounded-xl  bg-gray-100  placeholder:text-gray-400 text-black' placeholder='Время Обратно'/>
        <button type='button'
            onClick={handleSearch}
            className=" w-full p-4 rounded-lg bg-green-600 text-white  hover:bg-green-500 transition shadow-sm">
            Найти
        </button>
        <Link  className= "p-4 rounded-lg bg-red-600  hover:bg-red-500 transition shadow-sm" to="/login">
            <p className='text-white '>Выйти</p>
        </Link>
        </div>
    )
    }