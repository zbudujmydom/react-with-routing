import { createContext, useState } from "react";

export const HerosesContext = createContext([]);

export const HerosesContextProvider = ({children}) => {
    const [heroses, setHeroses] = useState([]);

    const addHero = (hero) => {
        setHeroses(prevState => [...prevState, hero]);
    }

    return <HerosesContext.Provider value={{
        heroses, 
        addHero
    }}>{children}</HerosesContext.Provider>
}