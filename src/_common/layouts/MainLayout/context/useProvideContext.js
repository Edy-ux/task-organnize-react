import { useState, memo } from 'react'

const useProvideMain = () => {
    const [sidebarBarIsOpen, setSidebarIsOpen] = useState(false)
    return {
        sidebarBarIsOpen
    }
}

export default useProvideMain;


