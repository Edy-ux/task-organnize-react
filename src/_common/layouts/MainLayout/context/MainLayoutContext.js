import { createContext } from "react";
import useProvideMain from "./useProvideContext";

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


