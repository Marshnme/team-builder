import React from 'react';


const Member = props => {
    return (
        <>
        {props.member.map(item => (
            <div key= "item.id">
                <h2>{item.name}</h2>
                <p>{item.role}</p>
                <p>{item.email}</p>
            </div>
        ))}
        </>
    );
};



export default Member;