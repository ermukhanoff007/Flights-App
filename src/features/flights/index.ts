import flights from "@/data/flights.json"
import dict from '@/data/dict.json'

export const getFlights = () =>{
    return new Promise((res)=>{
        setTimeout(()=>res(flights),500)
    })
}

export const getDict = () => {
    return new Promise((res)=>{
        setTimeout(()=>res(dict),500)
    })
}