import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setCityFrom, setCityTo, setDateTo, setDateReturn } from '@/features/flights/flightSlice'

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
        <input type="text" onChange={(e)=>setFrom(e.target.value)} className='p-4 border border-green-200 rounded-xl' placeholder='Откуда'/>
        <input type="text" onChange={(e)=>setTo(e.target.value)} className='p-4 border border-green-200 rounded-xl' placeholder='Куда'/>
        <input type="time" onChange={(e)=>setDate(e.target.value)} className='p-4 border border-green-200 rounded-xl' placeholder='Время Туда'/>
        <input type="time" onChange={(e)=>setReturn(e.target.value)} className='p-4 border border-green-200 rounded-xl' placeholder='Время Обратно'/>
        <button type='button' onClick={handleSearch}>Найти</button>
        </div>
    )
    }