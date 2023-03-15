import { useContext } from 'react'
import {SnackbarContext} from './SnackbarContext'


const useSnackbarContext = () => {
    return useContext(SnackbarContext)
}


export default useSnackbarContext