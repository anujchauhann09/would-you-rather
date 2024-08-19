import { _getUsers } from "../utils/data"

export const GET_USERS = 'GET_USERS'

export const getUsers = async () => {
    try {
        const result = await _getUsers()
        if(result) 
            dispatch({
                type: GET_USERS,
                payload: result
            })
        console.log(result)
    } catch (error) {
        console.error('Failed to fetch users: ', error)
    }
}