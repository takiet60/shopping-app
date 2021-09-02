import { USER_LOGIN, USER_LOGOUT } from "./userType";

const initialState = {
    user: { logged: false }
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN:
            findUserByEmail(action.user.email, action.user.password)
                .then(
                    res => {
                        state.user = {
                            ...state.user,
                            ...res,
                            logged: true
                        }
                    }
                )
                .catch(
                    err => {
                        console.log(err)
                    }
                )
            return state
        case USER_LOGOUT:
            return state.user = { }
        default:
            return state
    }
}

const findUserByEmail = async (email, password) => {
    const jsonPort = "http://localhost:3500/users"
    const response = await fetch(jsonPort)
    let user = { }
    try {
        if (response.ok && response.status === 200) {
            const items = await response.json()
            items.forEach(item => {
                if (email === item.email && password === item.password) {
                    user = item
                    return
                }
            })
        }
        return user
    }
    catch (err) {
        console.log(err)
    }
}

export default userReducer