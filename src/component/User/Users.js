import React, { useState } from 'react';

const Users = (props) => {
    const {name,email,phone,address,picture} = props.user;
    const addStyle={border: '1px solid black', background:'gray',margin:'5px'}
    const [mobile, setMobile] = useState('');
    const showPhone = () => {
        setMobile(phone)
    }
    return (
        <div style={addStyle}>
            <h1>My Name Is:{name}</h1>
            <p>My Email:{email}</p>
            <p><small>Address:{address.city}</small></p>
            <p><small>Phone Number:{mobile}</small></p>
            <img src={picture} alt="" />
            <button onClick={ () => props.handleAddClick(name)}>Add User</button>
            <button onClick={showPhone}>Show Phone Number</button>
        </div>
    );
};

export default Users;