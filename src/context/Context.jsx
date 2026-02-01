import { createContext } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {

    const contextValues = {}

    return (
        <Context.Provider value={contextValues}>
            { children }
        </Context.Provider>
    );
}