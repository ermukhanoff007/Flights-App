import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch,RootState  } from "./store";
 


export const useAppDispatch = () =>useDispatch<AppDispatch>()
export const useAppSelector : TypedUseSelectorHook <RootState> = useSelector
export function useAuth() {
    const {email,token,id} = useAppSelector(state => state.auth)
    return{
        isAuth : !!email,
        email,
        token,
        id,
    }
}