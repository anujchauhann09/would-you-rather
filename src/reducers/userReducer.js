import {GET_USERS} from '../actions/userActions'

const initialState = {
    users: {}
}

export const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_USERS: 
            return {...state, users: action.payload}
        default:
            return state
    }
}