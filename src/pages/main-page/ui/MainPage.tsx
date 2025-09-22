import React from "react"
import { useSelector } from "react-redux"
import { SearchComponent } from "@/components/SearchComponent"
import { FiltersComponents } from "@/components/FiltersComponent"
import { CardComponent } from "@/components/CardComponent"
import { selectFilteredFlights } from "@/features/flights/flightsSelector"
import { useGetDictQuery } from "@/features/flights/flightsApi"
import { useGetFlightsQuery } from "@/features/flights/flightsApi"
import { redirect } from "react-router-dom" 

export const MainPage: React.FC = () => {
    const filteredFlights = useSelector(selectFilteredFlights)
    const { data: dict } = useGetDictQuery()
    useGetFlightsQuery()

    const airlines =
    dict &&
    Object.entries(dict.airlines).map(([iata, value]) => ({
        iata,
        name: value.name,
    }))

return (
    <div className="flex mt-8 flex-col">
        <SearchComponent />
        <div className="flex flex-row space-x-12">
            <div className="flex mt-6">
                {airlines && <FiltersComponents airlines={airlines} />}
            </div>
            <div className="flex flex-col mt-6 space-y-4 w-full">
                {filteredFlights?.length ? (
                filteredFlights.map((flight) => (
                    <CardComponent flight={flight} key={flight.id} />
                ))
                ) : (
                "Нет полетов"
                )}
            </div>
        </div>
    </div>
    )
    }