import {UPDATE_STATE_AUTH} from "../types";

const initialState = {
    isLoading: false,
    me: {},
    modalVisible: false
}

export const authReducer = (state = initialState, action) => {
    switch (action.type){
        case UPDATE_STATE_AUTH:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}