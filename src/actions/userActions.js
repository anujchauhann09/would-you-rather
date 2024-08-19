import { _getUsers } from "../utils/data"

export const GET_USERS = 'GET_USERS'

export const setUsers = (users) => ({
    type: GET_USERS,
    payload: users
})