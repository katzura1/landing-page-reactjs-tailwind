import { createContext, useContext } from "react";

export const AppContext = createContext({
    empty: true,
});

export function useAppContext() {
    return useContext(AppContext);
}

