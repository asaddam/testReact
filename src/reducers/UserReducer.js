import {
    USER_LOGIN_FAIL,
    USER_LOGIN_SUCCESS,
    USER_REGISTRATION
} from '../actions/types';

const INITIAL_STATE = {
    authChecked: false,
    phoneNumber: '',
    confirmResult: null,
    codeInput: '',
    verCode: '123456',
    verifikasi: true,
    
}

export default (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case USER_REGISTRATION :
            return { ...action.payload, verifikasi: false }
        case USER_LOGIN_SUCCESS :
            return { ...action.payload, authChecked: true }
        case USER_LOGIN_FAIL :
            return { authChecked: true }
        default :
            return state
    }
}
