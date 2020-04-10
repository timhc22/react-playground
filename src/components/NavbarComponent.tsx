import React from 'react';
import { Link } from 'react-router-dom';

const NavbarComponent = (): JSX.Element => {
  return (
    <nav>
        <section className="container">
            <Link to="/">Dashboard</Link>
            <Link to="/users">Users</Link>
        </section>
    </nav>
  );
};

export default NavbarComponent;
