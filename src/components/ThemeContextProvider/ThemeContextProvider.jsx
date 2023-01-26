import React from "react";
import { useState } from "react";
import { ThemeContext } from './ThemeContext';



export const ThemeContextProvider = ({children}) => {
    const [theme, setTheme] = useState("defaul")
 
    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}