import React from 'react';
import { ListCard } from './ListCard';



export const UserList = (props) => {
    return(
        <div className='userListContainer'>
            {props.users.map((user, index) => (
                <ListCard key={index} user={user}/>
            ))}
        </div>
    )
}