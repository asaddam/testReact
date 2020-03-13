import { 
    INPUT_TEXT,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    LOADING_LOGIN,
    HIDE_UNHIDE_PASSWORD
 } from "../actions/types";

 const INITIAL_STATE = {
     phoneNumber: '',
     email: '',
     password: '',
     error: '',
     loading: false,
     hidePassword: true
 }

 export default (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case INPUT_TEXT :
            return { ...state, [action.payload.prop]: action.payload.value }
        case HIDE_UNHIDE_PASSWORD :
            return { ...state, hidePassword: !state.hidePassword }
        case USER_LOGIN_FAIL :
            return { ...state, loading: false, error: action.payload }
        case LOADING_LOGIN :
            return { ...state, loading: true, error: '' }
        case USER_LOGIN_SUCCESS :
            return INITIAL_STATE
        default :
            return state      
    }
}