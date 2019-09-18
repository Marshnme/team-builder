import React, {useState} from 'react';

const Form = props => {
    return (
        <form>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" name="name"></input>
            <label htmlFor="email">Email</label>
            <input id="email" type="text" name="name"></input>
            <label htmlFor="role">Role</label>
            <input id="role" type="text" name="name"></input>
            <button type="submit">Add Member</button>
        </form>
    )
}


export default Form;