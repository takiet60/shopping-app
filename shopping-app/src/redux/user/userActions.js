import { USER_LOGIN } from "./userType";
import { USER_LOGOUT } from "./userType";

export const login = (user) => {
    return {
        type: USER_LOGIN,
        user: user
    }
}

export const logout = () => {
    return {
        type: USER_LOGOUT
    }
}