import { createContext } from "react";
import useProvideMain from "./useProvide"

export const MaintContext = createContext({})

function ProviderMain({ children }) {
    const context = useProvideMain()
   
    return (
        <>
            <MaintContext.Provider value={context}>
                {children}
            </MaintContext.Provider>;
        </>
    )
}
export default ProviderMain


