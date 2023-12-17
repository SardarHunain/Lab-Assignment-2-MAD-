import React, { useState } from "react";
import CityContext from "./CityContext";

const CityContextProvider = ({children})=>{
    
    const [city,setCity] = useState({
        cityName:"Abbottabad",
        cityProvince:"KPK"
    })
    
    return(
        <CityContext.Provider value={{city,setCity}}>
            {children}
        </CityContext.Provider>
    )
}

export default CityContextProvider