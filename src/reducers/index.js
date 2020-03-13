import { combineReducers } from "redux";
import UserReducer from './UserReducer';
import LoginReducer from './LoginReducer';
import AddressReducer from './AddressReducer';
import AddReducer from "./AddReducer";

export default combineReducers({
    user: UserReducer,
    loginForm: LoginReducer,
    alamatForm: AddressReducer,
    addAlamat: AddReducer
})