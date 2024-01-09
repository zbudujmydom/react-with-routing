import { createContext, useEffect, useState } from "react";

export const HerosesContext = createContext([]);

export const HerosesContextProvider = ({children}) => {
    const [heroses, setHeroses] = useState([]);

    useEffect(() => {
        Promise.all([
            fetchRandomHeroes(),
            fetchRandomHeroes(),
            fetchRandomHeroes(),
          ]).then((data) => setHeroses(data));
    }, [])

    const addHero = (hero) => {
        setHeroses(prevState => [...prevState, hero]);
    }

    const removeHero = (id) => {
        const updatedHeroses = heroses.filter(hero => hero.id !== id);
        setHeroses(updatedHeroses);
    }

    const removeallHeroses = () => {
        setHeroses([]);
    }

    return <HerosesContext.Provider value={{
        heroses, 
        addHero,
        removeHero,
        removeallHeroses
    }}>{children}</HerosesContext.Provider>
}