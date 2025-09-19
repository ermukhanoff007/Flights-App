// storeFlights/flightsSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { FormattedFlight } from "@/features/flights/types/formattedTypes"
import { flightsApi } from "@/features/flights/flightsApi"


interface FiltersState {
    cityFrom: string
    cityTo: string
    dateTo:string
    dateReturn :string
    airlines: string[]
}

interface FlightsState {
    flights: FormattedFlight[]
    filters: FiltersState
}

const initialState: FlightsState = {
    flights: [],
    filters: {
        cityFrom: "",
        cityTo: "",
        airlines: [],
        dateReturn:'',
        dateTo:''
    },
}

const flightsSlice = createSlice({
    name: "flights",
    initialState,
    reducers: {
        setCityFrom(state, action: PayloadAction<string>) {
            state.filters.cityFrom = action.payload
        },
        setCityTo(state, action: PayloadAction<string>) {
            state.filters.cityTo = action.payload
        },
        setAirlines(state, action: PayloadAction<string[]>) {
            state.filters.airlines = action.payload
        },
        setDateTo(state, action:PayloadAction<string>){
            state.filters.dateTo = action.payload
        },
        setDateReturn (state,action :PayloadAction<string>){
            state.filters.dateReturn = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addMatcher(
        flightsApi.endpoints.getFlights.matchFulfilled,
        (state, action) => {
            state.flights = action.payload
        }
        )
    },
    })

export const { setCityFrom, setCityTo, setAirlines, setDateTo,setDateReturn } = flightsSlice.actions
export default flightsSlice.reducer