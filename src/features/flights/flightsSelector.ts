import { RootState } from "@/app/store";
import { createSelector } from "@reduxjs/toolkit";
import { FormattedFlight } from "./types/formattedTypes";


export const selectFlights = (state : RootState) => state.flights.flights
export const selecFilters = (state:RootState) => state.flights.filters

export const selectFilteredFlights = createSelector(
    [selectFlights,selecFilters],
    (flights,filters) => {
        return flights.filter((flight:FormattedFlight)=>{
            const matchAirline = 
            filters.airlines.length===0 || flight.airlines.some((a)=>filters.airlines.includes(a))

            const matchCity =
            (!filters.cityFrom ||
            flight.segments.some((s) => s.departureCity === filters.cityFrom)) &&
            (!filters.cityTo ||
                flight.segments.some((s) => s.arriveCity === filters.cityTo))
    
            return matchAirline && matchCity
        })
    }
)