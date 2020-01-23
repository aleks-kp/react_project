import React from 'react';
import style from './Post.module.css';

const Post = (props) => {
    return <div className={style.Post}>
        <div className={style.Post__Img}>
            <img src={props.img} width="370" height="220" alt="jeans" />
        </div>
        <div className={style.PostText}>
            <span className={style.PostText__Title}>
                {props.title}
                    </span>
            <p className={style.PostText__Сontent}>
                {props.content}
            </p>
            <a href="#">Read More</a>
        </div>
        <div className={style.PostDate}>
            <time>{props.date}</time>
        </div>
        <div className={style.PostMonth}>
            <time>{props.month}</time>
        </div>
    </div>
}

export default Post;
