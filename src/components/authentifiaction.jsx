import { createContext,useState } from "react";

export const AuthContext=createContext()


export function AuthContextProvider({children}){
    const [authDetails,setAuthDetails]=useState({
        lemail:null,
        token:null,
        isAuthenticated:false
    })

    const login=(token,email)=>{
        setAuthDetails({
            email:email,
            isAuthenticated:true,
            token:token
        })
    }

    const logout=()=>{
        setAuthDetails({
            email:null,
            token:null,
            isAuthenticated:false
        })
    }
}

return( 
    <AuthContext.Provider  value={authDetails,login,logout}>{children}</AuthContext.Provider>
)