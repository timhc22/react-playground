import React, { useState } from 'react';
import { User } from "../interfaces/User";

const AddUserForm = (props: any): JSX.Element => {
  const initialFormState = { id: null, name: '', username: '' };
  const [user, setUser] = useState<User>(initialFormState);

  const handleInputChange = (event: any)  => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
      <form onSubmit={event => {
        event.preventDefault();
        if (!user.name || !user.username) return;

        props.addUser(user);
        setUser(initialFormState);
      }}>
        <label>Name</label>
        <input type="text" name="name" value={user.name} onChange={handleInputChange} />
        <label>Username</label>
        <input type="text" name="username" value={user.username} onChange={handleInputChange} />
        <button>Add new user</button>
      </form>
  )
};

export default AddUserForm
