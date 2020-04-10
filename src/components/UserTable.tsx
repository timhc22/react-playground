import React from 'react';
import { User } from '../interfaces/User';
import { UserComponent } from "./UserComponent";

interface Props {
    users: User[]
    editRow?: any
    deleteUser?: any
}

const UserTable = ({ users, editRow, deleteUser }:Props): JSX.Element => {
    return (
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            { users.length > 0 ? (
                users.map(user => (
                    <UserComponent key={user.id} user={user} editRow={editRow} deleteUser={deleteUser} />
                ))
            ) : (
                <tr>
                    <td colSpan={3}>No users</td>
                </tr>
            )}
            </tbody>
        </table>
    );
};

export default UserTable
