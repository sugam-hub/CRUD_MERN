import React from 'react';
import { AppBar, Toolbar, styled } from '@mui/material';

import { NavLink } from 'react-router-dom';

const Header = styled(AppBar)`
        background: #111111
`;

const Tabs = styled(NavLink)`
    font-size: 20px;
    margin-right: 20px;
    color: inherit;
    text-decoration: none;
`;

const NavBar = () => {
    return (
        <div>
            <Header position="static">
                <Toolbar>
                    <Tabs to="/">CRUD</Tabs>
                    <Tabs to="allusers">All Users</Tabs>
                    <Tabs to="adduser">Add Users</Tabs>
                </Toolbar>
            </Header>
        </div>
    );
}

export default NavBar