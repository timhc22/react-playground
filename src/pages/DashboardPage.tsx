import React from 'react';
import { Link } from 'react-router-dom';

const DashboardPage = (): JSX.Element => (
    <section className="container">
        <h1>Dashboard</h1>
        <p>This is the dashboard.</p>

        <Link to="/users" className="button">
            View Users
        </Link>
    </section>
);

export default DashboardPage;
