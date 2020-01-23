import React from 'react';
import style from './Navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <li className={style.navBarUl__item} tabIndex="0">
            <Link to={props.link}>{props.title}</Link>
        </li>
    )
}

export default Navbar;
