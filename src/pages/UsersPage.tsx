import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux"; // enables redux state to be in props of component
import UserTable from "../tables/UserTable";
import AddUserForm from '../forms/AddUserForm';
import EditUserForm from '../forms/EditUserForm';
import { fetchUsers } from '../actions/usersActions';
import { User } from "../interfaces/User";


const UsersPage = (): JSX.Element => {
    const initialFormState: User = { id: null, name: '', username: '' };

    const users = useSelector((state: any) => state.users.users);
    const dispatch = useDispatch();

    // todo check hooks integration with this (especially on users)
    useEffect(() => {
        dispatch(fetchUsers()) // dispatch automatically available on a connected component
    }, [dispatch]);

    // const [users, setUsers] = useState<User[]>(usersData); // todo is this right?
    const [editing, setEditing] = useState<boolean>(false);
    const [currentUser, setCurrentUser] = useState<User>(initialFormState); // todo should this be used with users and useSelector as above?

    const addUser = (user: User): void => {
        user.id = users.length + 1;
        // setUsers([...users, user]);
    };

    const deleteUser = (id: number): void => {
        setEditing(false);
        // setUsers(users.filter(user => user.id !== id));
    };

    const editRow = (user: User): void => {
        setEditing(true);
        setCurrentUser({ id: user.id, name: user.name, username: user.username });
    };

    const updateUser = (id: number, updatedUser: User): void => {
        setEditing(false);
        // setUsers(users.map(user => (user.id === id ? updatedUser : user)));
    };

    return (
        <div className="container">
            <h1>CRUD App with Hooks</h1>
            <div className="flex-row">

                <div className="flex-large">
                    { editing ? (
                        <div>
                            <h2>Edit user</h2>
                            <EditUserForm
                                editing={editing}
                                setEditing={setEditing}
                                currentUser={currentUser}
                                updateUser={updateUser} />
                        </div>
                    ) : (
                        <div>
                            <h2>Add user</h2>
                            <AddUserForm addUser={addUser} />
                        </div>
                    )}
                </div>

                <div className="flex-large">
                    <h2>View users</h2>
                    <UserTable users={users} deleteUser={deleteUser} editRow={editRow}/>
                </div>
            </div>
        </div>
    )
};

export default UsersPage;
