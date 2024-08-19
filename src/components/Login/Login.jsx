import React, { useEffect } from "react"
// import './Login.css'
import { useDispatch, useSelector } from 'react-redux'
import { setUsers } from '../../actions/userActions'
import { _getUsers } from '../../utils/data'

export default function Login() {
    const dispatch = useDispatch()
    const users = useSelector((state) => state.userReducer.users || {})

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const fetchedUsers = await _getUsers()
                dispatch(setUsers(fetchedUsers))
            } catch (error) {
                console.error('Failed to fetch users: ', error)
            }
        }

        fetchUsers()
    }, [dispatch])

    const usersArray = users ? Object.values(users) : []

    return (
        <div className="login-container shadow-lg rounded-md w-11/12 max-w-[480px] sm:max-w-[640px] bg-slate-600 mx-auto mt-16 sm:mt-10">
        <div className="login-header p-2 bg-teal-600">
            <span className="text-xl text-white">Login</span>
        </div>
        <div className="login-main bg-slate-50 p-4 flex flex-col gap-3 w-full">
            <div className="user-image-box mx-auto">
            <img src="/images/johndoe.png" alt="User" className="rounded-full h-40 w-40 sm:h-48 sm:w-48 shadow-lg" />
            </div>
            <div className="user-name flex justify-center">
            <select id="user-select" className="p-2 w-3/4 sm:w-1/2 border border-gray-300 rounded">
                <option value="Select User">Select User</option>
                {/* {Object.keys(users).map((key) => {
                const user = users[key];

                return (
                    <option key={user.id} value={user.name}>
                    {user.name}
                    </option>
                );
                })} */}
                {
                    usersArray.map((user) => (
                        <option key={user.id} value={user.name}>{user.name}</option>
                    ))
                }
            </select>
            </div>
        </div>
        </div>
    )
}