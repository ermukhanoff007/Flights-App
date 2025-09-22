import React from "react";
import { Form } from "@/components/Form";
import { useAppDispatch } from "@/app/hooks";
import { setUser } from "@/features/auth/authSlice";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const SignUp: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const handleRegister = (email: string, password: string): void => {
        const auth = getAuth();
        
        createUserWithEmailAndPassword(auth, email, password)
        .then(async ({ user }) => {
            const idToken = await user.getIdToken()
            dispatch(
            setUser({
                email: user.email,
                id: user.uid,
                token: idToken,
            })
            );
            console.log("User created")
            navigate("/")
        })
        .catch((error) => {
            console.error("Ошибка регистрации:",error.code ,error.message);
        });
    };

    return <Form title="Register" handleClick={handleRegister} />;
    };


