import React from 'react';
import style from './Button.module.css';

export default class Button extends React.Component {
    render() {
        return ( 
            <button onClick={this.props.addPost} className={style.Main__Button}>
                Add new Post
            </button>
        )
    }
}

