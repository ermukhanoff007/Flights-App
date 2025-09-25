import { flightsApi } from "@/features/flights/flightsApi";
import { configureStore } from "@reduxjs/toolkit";
import flightsReducer from "@/features/flights/flightSlice"
import authReducer from "@/features/auth/authSlice"
import cartReducer from "@/features/cart/cartSlicer"
const store = configureStore({
    reducer:{
        auth:authReducer,
        flights:flightsReducer,
        cart :cartReducer ,
        [flightsApi.reducerPath] : flightsApi.reducer
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(flightsApi.middleware)
})

export type RootState = ReturnType<typeof store.getState >
export type AppDispatch = typeof store.dispatch

export default store 