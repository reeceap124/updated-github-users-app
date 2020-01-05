import React from 'react';
import {EnterUser} from './EnterUser'


export const CurrentUser = props => {
    
    return (
        <div className='currentUser'>
            <EnterUser handleChange={props.handleChange} handleEnter={props.handleEnter} text={props.text}/>
            <h2>{props.user.name}</h2>
            <img src={props.user.avatar_url} alt='profile pic'/>
            <p>Website: {(props.user.blog === "") ? 'Not Listed' : <a href={`${props.user.blog}`.includes('http') ? props.user.blog : `https://www.${props.user.blog}`} target="_blank" rel='noreferrer noopener'>{props.user.blog}</a>}</p>
            <p><span>Followers: {props.user.followers}</span>   <span>Following: {props.user.following}</span></p>
        </div>
    )
}