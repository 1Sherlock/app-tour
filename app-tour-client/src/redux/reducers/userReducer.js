import {UPDATE_STATE_USERS} from "../types";

const initialState = {
    isLoading: false,
    users: [],
    isModalVisible: false,
    selectedUser: null,
    selectedRole: null
}

export const userReducer = (state = initialState, action) => {
    switch (action.type){
        case UPDATE_STATE_USERS:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}