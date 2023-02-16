import React from 'react';
import Users from './components/users'
import SearchStatus from './components/searchStatus';
import API from './api';
import { useState } from 'react';

const App = () => {
    // create hook
    const [users, setUsers] = useState(API.users.fetchAll())

    // create function for delete users
    const handleDelete = (userId) => {
        // set currence state users 
        setUsers(prevState => prevState.filter((item) => {
            return item._id != userId
        }) )
    }

    return (
        <>
            <SearchStatus usersLength = {users.length}/>
            <Users users = {users} onDelete = {handleDelete}/>
        </>
    )
}
 
export default App;