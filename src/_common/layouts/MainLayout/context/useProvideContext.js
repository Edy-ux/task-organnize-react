import { useState, memo } from 'react'

const useProvideMain = () => {
    const [sidebarIsOpen, setSidebarIsOpen] = useState(false)
    return {
        sidebarIsOpen,
        setSidebarIsOpen
    }
}

export default useProvideMain;


