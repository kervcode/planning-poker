import { useState } from "react";

import { auth } from "../Firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const useSignup = () => {
    const [error, setError] = useState(null);

    const signup = (email, password) => {
        setError(null);
        createUserWithEmailAndPassword(auth, email, password)
        .then(
            (res) => {
                console.log('user signup:', res.user)
            })
        .catch((err) => {
            setError(err.message)
        })
    }

    return { error, signup}
}