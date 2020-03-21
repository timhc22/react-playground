import React from 'react';
import { User } from '../interfaces/User';

interface Props {
    users: User[]
    editRow?: any
    deleteUser?: any
}

const UserTable = ({ users, editRow, deleteUser }:Props): JSX.Element => (
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
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>
                  <button onClick={() => editRow(user)} className="button muted-button">Edit</button>
                  <button onClick={() => deleteUser(user.id)} className="button muted-button">Delete</button>
                </td>
              </tr>
          ))
      ) : (
          <tr>
            <td colSpan={3}>No users</td>
          </tr>
      )}

      </tbody>
    </table>
);

export default UserTable
