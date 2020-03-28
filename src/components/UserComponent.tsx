import React from 'react';
import {User} from "../interfaces/User";

interface Props {
    user: User,
    editRow?: any
    deleteUser?: any
}

export const UserComponent = ({ user, editRow, deleteUser }: Props): JSX.Element => (
    <tr key={user.id}>
        <td>{user.username}</td>
        <td>{user.name}</td>
        <td>
            <button onClick={() => editRow(user)} className="button muted-button">Edit</button>
            <button onClick={() => deleteUser(user.id)} className="button muted-button">Delete</button>
        </td>
    </tr>
);

