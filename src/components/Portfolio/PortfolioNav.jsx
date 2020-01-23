import React from 'react';
import style from './PortfolioNav.module.css';

export default class PortfolioNav extends React.Component {
    render() {
        return (
            <div className={style.PortfolioNav}>
                <div className={style.PortfolioNav__Button}>
                    <a href="">All</a>
                </div>
                <div className={style.PortfolioNav__Button}>
                    <a href="">Web Design</a>
                </div>
                <div className={style.PortfolioNav__Button}>
                    <a href="">Mobile App</a>
                </div>
                <div className={style.PortfolioNav__Button}>
                    <a href="">Illustration</a>
                </div>
                <div className={style.PortfolioNav__Button}>
                    <a href="">Photography</a>
                </div>
            </div>
        )
    }
}
