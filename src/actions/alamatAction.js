import { INPUT_ALAMAT,
         LOADING_ALAMAT,
         ADD_ALAMAT_SUCCESS,
         ADD_ALAMAT_FAIL,
         ADD_ALAMAT } from "./types"

export const onInputAlamat = (prop, value) => {
    return {
        type: INPUT_ALAMAT,
        payload: { 
            prop, value
        }
    }
}

export const onHapusAlamat = () => {
    return async (dispatch) => {
        dispatch({ type: ADD_ALAMAT_SUCCESS })
    }
}