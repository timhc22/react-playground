import React from 'react';
import { User } from "../interfaces/User";

export const UserComponent = (user: User): JSX.Element => (
    <article className="user-excerpt">
        <h2>{user.name}</h2>
    </article>
);
