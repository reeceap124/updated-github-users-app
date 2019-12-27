import React from 'react';


export  const ListCard = props => {
    return (
        <div className='listCard' onClick={(e)=>{
            e.preventDefault();
            props.setUrl(`https://api.github.com/users/${props.user.login}`)
        }}>
            <h2>{props.user.name}</h2>
            <img src={props.user.avatar_url} alt='profile pic'/>
            <p>Website: {(props.user.blog === "") ? 'Not Listed' : <a href={props.user.blog} target="_blank" rel='noreferrer noopener'>{props.user.blog}</a>}</p>
            <p><span>Followers: {props.user.followers}</span>   <span>Following: {props.user.following}</span></p>
        </div>
    )
}