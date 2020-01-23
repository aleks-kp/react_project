import React from 'react';
import style from './Portfolio.module.css';
import PortfolioNav from './PortfolioNav';
import Product from './Product';

export default class Portfolio extends React.Component {
    constructor(props) {
        super(props)
               this.state = {
                   pageTitle: 'Page Title',

        }
    };

    render() {
        return (
            <section className={style.Portfolio}>
                <span className={style.Portfolio__Title}>
                    {this.state.pageTitle}
                </span>
                <h1 className={style.Portfolio__Text}>
                    Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium.
                </h1>
                <PortfolioNav />
                <section className={style.productExampleWrap}>
                    < Product />
                </section>
            </section >
        )
    }
}
