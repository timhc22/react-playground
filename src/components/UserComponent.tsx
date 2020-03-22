import React from 'react';
import { User } from "../interfaces/User";

// TODO FIX THIS TO BE USER
export const UserComponent = (user: User): JSX.Element => (
    <article className="user-excerpt">
        <h2>{user.name}</h2>
        <h3>{user.username}</h3>
    </article>
);
