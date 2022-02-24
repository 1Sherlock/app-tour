import axios from "axios";
import {API_PATH, CONFIG, TOKEN_NAME} from "../../tools/constants";
import {UPDATE_STATE_AUTH} from "../types";
import {toast} from "react-toastify";

export function updateState(state) {
    return {
        type: UPDATE_STATE_AUTH,
        payload: state
    }
}

export const login = (e, values) => (dispatch) => {
    dispatch(updateState({isLoading: true}))
    axios.post(API_PATH + "auth/login", values)
        .then(async res => {
            if (res.data.accessToken) {
                await localStorage.setItem(TOKEN_NAME, res.data.tokenType + " " + res.data.accessToken);
                axios.get(API_PATH + "user/me", {
                    headers: {
                        "Authorization": res.data.tokenType + " " + res.data.accessToken
                    }
                })
                    .then((res) => {
                        const role = res.data.roles;
                        role.filter(item => item.name === "ROLE_ADMIN").length > 0 ?
                            window.location.href = "/admin/dashboard" :
                            window.location.href = "/"
                    })
            }
        })
        .catch((err) => {
            if (err.response) {
                toast.error(err.response.data.message)
            }
        })
        .finally(() => {
            dispatch(updateState({isLoading: false}))
        })
}

export const checkUser = (phoneNumber) => (dispatch) => {
    dispatch(updateState({isLoading: true}))

    axios.post(API_PATH + "auth/check", {phoneNumber})
        .then(res => {
            if (res.data.success){
                dispatch(updateState({hasRegistered: true, checked: true}))
            } else {
                if(res.data.message === "nRegistered"){
                    dispatch(updateState({hasRegistered: false, checked: true}))
                } else toast.error("Connection Error");
            }
        })
        .finally(() => {
            dispatch(updateState({isLoading: false}))
        })
}

export const register = (e, v) => (dispatch) => {

}