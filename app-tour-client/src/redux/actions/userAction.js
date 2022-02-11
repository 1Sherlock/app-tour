import axios from "axios";
import {API_PATH, CONFIG} from "../../tools/constants";
import {toast} from "react-toastify";
import {UPDATE_STATE_USERS} from "../types";

export function updateState(state) {
    return {
        type: UPDATE_STATE_USERS,
        payload: state
    }
}

export const getUsers = (page, size, search) => (dispatch) => {
    // axios.get(API_PATH + "user/getUsers?page=" + page + "&size=" + size + "&search=" +search, CONFIG)
    axios.get(API_PATH + "user/getUsers", CONFIG)
        .then(res => {
            dispatch(updateState({users: res.data.data}))
        })
}

export const changeRole = (e, v) => (dispatch, getState) => {
    dispatch(updateState({isLoading: true}))

    axios.post(API_PATH + "user/changeRole", {...v, userId: getState().user.selectedUser.id}, CONFIG)
        .then(res => {
            toast.success(res.data.message);
            dispatch(updateState({selectedRole: null, selectedUser: null, isModalVisible: false}))
            dispatch(getUsers());
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