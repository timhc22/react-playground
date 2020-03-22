import React from 'react';

// TODO FIX THIS TO BE USER
export const UserComponent = ({ user }: any): JSX.Element => (
    <article className="user-excerpt">
        <p>UserName: {user.username}</p>
        <p>Name: {user.name}</p>
        <hr/>
    </article>
);
