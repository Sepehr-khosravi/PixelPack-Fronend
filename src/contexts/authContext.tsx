import { createContext, useState, useEffect } from "react"
import type {ReactNode} from "react"
//interfaces
import type {UserInterface} from "../types";
import type {AuthInterface} from "../types";


export const AuthContext = createContext<AuthInterface | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<UserInterface | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const sortedToken = localStorage.getItem("token");
        const sortedUser = localStorage.getItem("user");

        if(sortedToken && sortedUser){
            setUser(JSON.parse(sortedUser));
        };

        setLoading(false);
    }, []);

    const login = (token : string, userData : UserInterface)=>{
        localStorage.setItem("token", token);
        localStorage.setItem("user" , JSON.stringify(userData));
        setUser(userData);
    }

    const logout = ()=>{
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null);
    }

    return(
        <AuthContext.Provider
            value={{
                user,
                loading,
                login,
                logout,
                isAuthenticated: !!user,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}