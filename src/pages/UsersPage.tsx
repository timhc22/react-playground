import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'; // enables redux state to be in props of component
// import UserTable from "../tables/UserTable";
// import AddUserForm from '../forms/AddUserForm';
// import EditUserForm from '../forms/EditUserForm';
import { fetchUsers } from '../actions/usersActions';
import { UserComponent } from "../components/UserComponent";
import { User } from "../interfaces/User";

// const usersData: User[] = [
//     { id: 1, name: 'Tania', username: 'floppydiskette' },
//     { id: 2, name: 'Craig', username: 'siliconeidolon' },
//     { id: 3, name: 'Ben', username: 'benisphere' },
// ];
//
// const initialFormState: User = { id: null, name: '', username: '' };

const UsersPage = ({dispatch, users, loading, hasErrors}: any): JSX.Element => {
    // todo check hooks integration with this (especially on users)
    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch]);

    const renderUsers = () => {
        if (loading) return <p>Loading Users...</p>;
        if (hasErrors) return <p>Unable to display users.</p>;
        return users.map((user: User) => <UserComponent key={user.id} />)
    };

    return (
        <section>
            <h1>Users</h1>
            {renderUsers()}
        </section>
    )

    // const [users, setUsers] = useState<User[]>(usersData);
    // const [editing, setEditing] = useState<boolean>(false);
    // const [currentUser, setCurrentUser] = useState<User>(initialFormState);
    //
    // const addUser = (user: User): void => {
    //     user.id = users.length + 1;
    //     setUsers([...users, user]);
    // };
    //
    // const deleteUser = (id: number): void => {
    //     setEditing(false);
    //     setUsers(users.filter(user => user.id !== id));
    // };
    //
    // const editRow = (user: User): void => {
    //     setEditing(true);
    //     setCurrentUser({ id: user.id, name: user.name, username: user.username });
    // };
    //
    // const updateUser = (id: number, updatedUser: User): void => {
    //     setEditing(false);
    //     setUsers(users.map(user => (user.id === id ? updatedUser : user)));
    // };
    //
    // return (
    //     <div className="container">
    //         <h1>CRUD App with Hooks</h1>
    //         <div className="flex-row">
    //
    //             <div className="flex-large">
    //                 {editing ? (
    //                     <div>
    //                         <h2>Edit user</h2>
    //                         <EditUserForm
    //                             editing={editing}
    //                             setEditing={setEditing}
    //                             currentUser={currentUser}
    //                             updateUser={updateUser} />
    //                     </div>
    //                 ) : (
    //                     <div>
    //                         <h2>Add user</h2>
    //                         <AddUserForm addUser={addUser} />
    //                     </div>
    //                 )}
    //             </div>
    //
    //             <div className="flex-large">
    //                 <h2>View users</h2>
    //                 <UserTable users={users} deleteUser={deleteUser} editRow={editRow}/>
    //             </div>
    //         </div>
    //     </div>
    // )
};

// map redux state to react component props
const mapStateToProps = (state: any) => ({
    loading: state.users.loading,
    users: state.users.users,
    hasErrors: state.users.hasErrors,
});

// connect redux to react
export default connect(mapStateToProps)(UsersPage);
