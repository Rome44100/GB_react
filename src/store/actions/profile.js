export const CHANGE_NAME = "PROFILE::CHANGE_NAME";
export const CHANGE_IS_ONLINE = "PROFILE::CHANGE_IS_ONLINE";
export const CHANGE_IS_AUTH = "PROFILE::CHANGE_IS_AUTH";

export const changeName = (name) => ({
    type: CHANGE_NAME,
    payload: {
        name
    }
})

export const changeIsOnline = isOnline => ({
    type: CHANGE_IS_ONLINE,
    payload: {
        isOnline
    }
})

export const changeIsAuth = isAuth => ({
    type: CHANGE_IS_AUTH,
    payload: {
        isAuth
    }
})