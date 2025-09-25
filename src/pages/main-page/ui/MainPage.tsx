import React, { useState } from "react"
import { useSelector } from "react-redux"
import { SearchComponent } from "@/components/SearchComponent"
import { FiltersComponents } from "@/components/FiltersComponent"
import { CardComponent } from "@/components/CardComponent"
import { selectFilteredFlights } from "@/features/flights/flightsSelector"
import { useGetDictQuery } from "@/features/flights/flightsApi"
import { useGetFlightsQuery } from "@/features/flights/flightsApi"
import { CartModalView } from "@/components/CartModalView"

export const MainPage: React.FC = () => {
    const filteredFlights = useSelector(selectFilteredFlights)
    const { data: dict } = useGetDictQuery()
    useGetFlightsQuery()
    const [currentPage,setCurrentPage] = useState(1)
    const itemsPerPage = 4;

    const lastIndex = currentPage * itemsPerPage;
    const firstIndex = lastIndex - itemsPerPage
    const currentItems = filteredFlights.slice(firstIndex,lastIndex)
    const totalPages = Math.ceil(filteredFlights.length / itemsPerPage)



    const airlines =
    dict &&
    Object.entries(dict.airlines).map(([iata, value]) => ({
        iata,
        name: value.name,
    }))

return (
    <div className="flex m-8 flex-col">
        <SearchComponent />
        <div className="flex flex-row space-x-12">
            <div className="flex mt-6 flex-col ">
                {airlines && <FiltersComponents airlines={airlines} />}
                <CartModalView/>
            </div>
            <div className="flex flex-col mt-6 space-y-4 w-full">
                {currentItems?.length ? (
                <div className="flex flex-col items-center justify-center space-y-6">
                { 
                    currentItems.map((flight) => (
                    <CardComponent flight={flight} key={flight.id} />
                ))}
                <div className="flex justify-center items-center space-x-4">
                    <button
                        disabled={currentPage===1}
                        onClick={()=>setCurrentPage(prev=>prev-1)}
                        className=" p-2 border bg-gray-100 rounded-xl text-black  hover:bg-gray-200"
                    >
                        ←Назад
                    </button>
                    {
                        Array.from({length: totalPages}, (_,i)=>(
                            <button
                                key={i+1}
                                onClick={()=>setCurrentPage(i+1)}
                                className={`px-3 py-1 border rounded ${
                                    currentPage === i + 1 ? "bg-green-500 text-black" : ""}`}
                            >
                                {i+1}
                            </button>
                        ))
                    }
                    <button
                        disabled={currentPage===totalPages}
                        onClick={()=>setCurrentPage(prev=>prev+1)}
                        className="p-2 border bg-gray-100 rounded-xl text-black hover:bg-gray-200"
                    >
                        Вперед→
                    </button>
                </div>
                </div>
                


                ) : (
                "Нет полетов"
                )}
            </div>
        </div>
    </div>
    )
    }