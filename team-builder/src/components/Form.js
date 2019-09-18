import React, {useState} from 'react';

const Form = props => {
    const [newMem, setNewMem] = useState([{
        name:"",
        email:"",
        role:""
    }]);
    const change = e =>{
        setNewMem({...newMem, [event.target.name]: event.target.value});
    }

    const Submit = e =>{
        e.preventDefault();
        props.addNewMember(newMem);
        setNewMem({name:"",email:"",role:""});
    };

    return (
        <form onSubmit = {Submit}>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" name="name" value={newMem.name} onChange={change}></input>
            <label htmlFor="email">Email</label>
            <input id="email" type="text" name="name" value={newMem.email} onChange={change}></input>
            <label htmlFor="role">Role</label>
            <input id="role" type="text" name="name" value={newMem.role} onChange={change}></input>
            <button type="submit">Add Member</button>
        </form>
    )
}


export default Form;