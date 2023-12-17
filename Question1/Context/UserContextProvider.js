import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children})=>{
    
    const [user,setUser] = useState({
        Name:"Hunain",
        RegNo:"FA20-BCS-040"
    })
    
    return(
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider