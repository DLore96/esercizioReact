import { useState } from "react";
import { AuthContext } from "./authContext";
import { User } from "../lib/interfaces";


export function AuthContextProvider({children}: {children: React.ReactNode}) {

    const [user, setUser] = useState<User>(
        {
            firstName: '',
            lastName: '',
            email: '',
            role: ''
        }
    );

    function handleSetUser(data: User) {
        setUser(data);
    }

    return (
        <AuthContext.Provider value={{user, handleSetUser}}>
            {children}
        </AuthContext.Provider>
    );
}