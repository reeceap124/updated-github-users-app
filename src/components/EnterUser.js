import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';



 export const EnterUser = (props) => {

    return (
        <div onClick={props.handleEnter}>
            <form onSubmit={props.handleEnter}>
                <TextField onChange={props.handleChange} value={props.text} placeholder='Change the User'/>
                <Button onClick={props.handleEnter}>Enter</Button>
            </form>
            
        </div>
    )
 }