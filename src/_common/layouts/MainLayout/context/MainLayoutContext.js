import { createContext, memo } from "react";
import useProvide from "./useProvideMain"

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
export default memo(ProviderMain)


