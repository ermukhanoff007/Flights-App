import {Form} from "@/components/Form"
import { useAppDispatch } from '@/app/hooks'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setUser } from '@/features/auth/authSlice';
import { useNavigate } from "react-router-dom";

export const Login = () => {

    
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const handleLogin = (email: string ,password: string) =>{
        const auth = getAuth();
        signInWithEmailAndPassword(auth,email,password)
            .then(({user})=>{
                dispatch(setUser({
                    email: user.email,
                    id : user.uid,
                    token : user.refreshToken,
                }))
            })
            navigate("/")
    }
    return (
        <Form title='Login' handleClick = {handleLogin}/>
    )
}
