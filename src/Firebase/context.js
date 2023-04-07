import React, { useEffect, useState } from "react";
import { app } from "./firebase";


export const AuthContext = React.createContext();


const auth = getAuth(app);


export const AuthProvider = ({ children}) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        auth.onAuthStateChanged(setUser);

        console.log(auth.onAuthStateChanged(setUser)); // DELETE at cleanup
    })
}