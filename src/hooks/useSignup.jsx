import { useState } from "react";
import { useAuthContext} from "../hooks/useAuthContext";

import { auth } from "../Firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const useSignup = () => {
    const [error, setError] = useState(null);
    const {dispatch} = useAuthContext();

    const signup = (email, password) => {
        setError(null);

        createUserWithEmailAndPassword(auth, email, password)
        .then(
            (res) => {
                dispatch({ type: "LOGIN", payload: res.user})
                console.log('user signup:', res.user)
            })
        .catch((err) => {
            setError(err.message)
        })
    }

    return { error, signup}
}