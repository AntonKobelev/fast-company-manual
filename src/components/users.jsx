import React, {useState} from "react";
import User from "./user";


const Users = (props) => {
    const {users, onDelete} = props
    //console.log('users', users)
    // return html 
    return (
        <>  
            {/*create title number of people for party. Generate valid phrase with function renderPhrase*/}
            <table className="table">
                {/*create head table*/}           
                <thead>               
                    <tr>  
                        <th scope="col">Имя</th>
                        <th scope="col">Качества</th>
                        <th scope="col">Профессия</th>
                        <th scope="col">Встретился, раз</th>
                        <th scope="col">Оценка</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {/* run for array of users with map method */}
                    {users.map((user) => {
                        //console.log('user', user)
                        return (
                            <User key = {user._id} {...user} onDelete = {onDelete}/>
                        )
                    })}
                </tbody>
            </table>
        </>)
}

export default Users