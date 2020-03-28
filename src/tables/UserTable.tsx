import React from 'react';
import { User } from '../interfaces/User';
import { UserComponent } from "../components/UserComponent";
import { useSelector } from "react-redux";


interface Props {
    users: User[]
    editRow?: any
    deleteUser?: any
}

const UserTable = ({ users, editRow, deleteUser }:Props): JSX.Element => {
    const loading = useSelector((state: any) => state.users.loading);
    const hasErrors = useSelector((state: any) => state.users.hasErrors);

    if ( loading ) return <p>Loading Users...</p>;
    if ( hasErrors ) return <p>Unable to display users.</p>;

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
