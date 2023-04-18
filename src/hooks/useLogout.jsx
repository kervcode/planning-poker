import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { auth } from "../Firebase/firebase";

import { signOut } from "firebase/auth";

export const useLogout = () => {
    const navigate = useNavigate();
    
    const logout = () => {
        signOut(auth)
            .then(
                () => {
                    navigate("/")
                    console.log("user signed out")
                }
            ).catch(
                (err) => {
                    console.log(err.message)
                }
            )
    }

    return { logout }
}