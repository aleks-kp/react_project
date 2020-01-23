import React from 'react';
import style from './FooterTwit.module.css';

const FooterTwit = (props) => {
    return <div className={style.footerTwitterText}>
        <p>
            <a href="#">{props.link}</a>
            {props.text}
                </p>
        <time>{props.time}</time>
    </div>
}

export default FooterTwit;