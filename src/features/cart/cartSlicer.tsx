import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { FormattedFlight, Segment } from "../flights/types/formattedTypes"

export interface CartItem extends FormattedFlight {
    quantity : number;
}

export interface CartState {
    items : CartItem[]
}

const initialState : CartState = {
    items: JSON.parse(localStorage.getItem("cart")||"[]")
}

const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers : {
        addToCart: (state,action : PayloadAction<CartItem>) =>{
            const existingItem = state.items.find((item)=>  item.id === action.payload.id)
            if(existingItem){
                existingItem.quantity += action.payload.quantity
            }
            else{
                state.items.push(action.payload)
            }
            localStorage.setItem("cart" , JSON.stringify(state.items))
        },
        removeFromCart: (state , action : PayloadAction<string>) =>{
            state.items=state.items.filter((item)=>item.id !== action.payload)
            localStorage.setItem("cart",JSON.stringify(state.items))
        },
        clearCart : (state)=>{
            state.items = []
            localStorage.setItem("cart",JSON.stringify(state.items))
        },
        updateQuantity: (state, action : PayloadAction <{id : string, quantity :number}> )=>{
            const item = state.items.find((i)=>i.id===action.payload.id)
            if(item){
                item.quantity = action.payload.quantity > 0 ? action.payload.quantity : 1
            }
            localStorage.setItem("cart",JSON.stringify(state.items))
        }
    }    
})

export const {addToCart,removeFromCart,clearCart,updateQuantity} = cartSlice.actions
export default cartSlice.reducer 