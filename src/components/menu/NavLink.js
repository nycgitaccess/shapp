import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import * as routes from '../../constants/routes';
import './navLink.css';

const NavBar = () => {
    return(
        <div className="myLinks">
           <ul>                   
                <li><NavLink to={routes.TRAININGS}>Training</NavLink></li>
                <li><NavLink to={routes.ORGANISATIONS}>Organisations</NavLink></li>
                <li><NavLink to={routes.MEMBERS}>Members</NavLink></li>
                <li><NavLink to={routes.MANAGE}>Manage</NavLink></li>
                <li>Logout</li>
            </ul> 

        </div>
    )
}

export default NavBar;