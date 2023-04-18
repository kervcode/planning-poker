import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from 'react-router-dom';

import { auth } from "../Firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export const useLogin = () => {
	const [error, setError] = useState(null);
	const { dispatch } = useAuthContext();
    const navigate = useNavigate();

	const login = (email, password) => {
		setError(null);

		signInWithEmailAndPassword(auth, email, password)
			.then((res) => {
				dispatch({ type: "LOGIN", payload: res.user });
				console.log("user signup:", res.user);
                navigate("/admin")
			})
			.catch((err) => {
				setError(err.message);
			});
	};

	return { error, login };
};
