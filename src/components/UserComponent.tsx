import React from 'react';
import {User} from "../interfaces/User";

interface Props {
    user: User
}

export const UserComponent = ({ user }: Props): JSX.Element => (
    <article className="user-excerpt">
        <p>UserName: {user.username}</p>
        <p>Name: {user.name}</p>
        <hr/>
    </article>
);
