import React from 'react';
import style from './Header.module.css';
import Navbar from './Navbar';
import Icon from '../Icon/Icon';

export default class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={style.main}>
                <div className={style.mainHeaderLogo}>
                    <Icon link='/home' />
                    <span>Waxom</span>
                </div>
                <nav className={style.navbar} tabIndex="0">
                    <ul className={style.navbarUl}>
                        <Navbar link='/' title='Home' />
                        <Navbar title='About Us' />
                        <Navbar link='/portfolio' title='Portfolio' />
                        <Navbar title='Features' />
                        <Navbar link='/blog' title='Blog' />
                        <Navbar title='Pricing' />
                        <Navbar title='Shortcodes' />
                        <Navbar title='Contact' />
                    </ul>
                    <div className={style.searchForm}>
                        <a href="#">
                            <img src='/img/header/icon-basket.svg' alt="" />
                        </a>
                        <form className={style.searchForm__icon} action="">
                            <a className='icon' href="#">
                                <img src='./img/header/icon-search.svg' alt="" />
                            </a>
                        </form>
                    </div>
                </nav>
            </div>
        )
    }
}
