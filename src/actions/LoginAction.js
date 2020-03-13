import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

import { 
    INPUT_TEXT,
    LOADING_LOGIN,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    HIDE_UNHIDE_PASSWORD
} from './types';

export const onInputText = (prop, value) => {
    return {
        type: INPUT_TEXT,
        payload: { 
            prop, value
        }
    }
}

export const hideUnhidePass = () => {
    return {
        type: HIDE_UNHIDE_PASSWORD
    }
}

export const onUserEnter = ({ phoneNumber }) => {
    return async (dispatch) => {
        try {
            dispatch({ type: LOADING_LOGIN })

            await AsyncStorage.setItem('phoneNumber', phoneNumber);
            dispatch({ 
                type: USER_LOGIN_SUCCESS,
                payload: { phoneNumber }
            })
        } catch(err) {
            dispatch({
                type: USER_LOGIN_FAIL,
                payload: err.response ? err.response.data.message : err.message
            })
        }
    }
}

// export const userEnterCheck = () => {
//     return async (dispatch) => {
//         try {
//             const phoneNumber = await AsyncStorage.getItem('phoneNumber');
//             if(!username) {
//                 return dispatch({ type: USER_LOGIN_FAIL })
//             }

//             dispatch({
//                 type: USER_LOGIN_SUCCESS,
//                 payload: { phoneNumber }
//             })
//         } catch(err) {
//             dispatch({ type: USER_LOGIN_FAIL })
//         }  
//     }
// }

export const onUserLogout = () => {
    return async (dispatch) => {
        await AsyncStorage.removeItem('phoneNumber')
        dispatch({ type: USER_LOGIN_FAIL })
    }
}