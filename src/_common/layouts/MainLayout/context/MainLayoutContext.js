import { createContext } from "react";
import useProvide from "./useProvide"

export const MainContext = createContext({})
MainContext.displayName = "MainContext"

function ProviderMain({ children }) {
    const context = useProvide()
   
    return (
        <>
            <MainContext.Provider value={context}>
                {children}
            </MainContext.Provider>;
        </>
    )
}
export default ProviderMain


