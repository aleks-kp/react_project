import React from 'react';
import style from './Widget.module.css';

const Widget = (props) => {
    return <div className={style.FooterWidgetImage}>
        <img src={props.img} alt="phone" />
    </div>
}

export default Widget;
