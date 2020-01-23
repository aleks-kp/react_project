import React from 'react';
import style from './Home.module.css';
import Text from './Text/Text';
import Icon from '../Icon/Icon';

export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            images: [
                { img: 'img/header/slide1.jpg' },
                { img: 'img/header/slide2.jpg' },
                { img: 'img/header/slide3.jpg' },
            ],
            index: 0,
        }
    };

    clickRight = () => {
        if (this.state.index === (this.state.images.length - 1)) {
            this.setState({
                index: 0
            })
            console.log(this.state.index)
        } else {
            let newIndex = this.state.index + 1;
            this.setState({
                index: newIndex
            })
            console.log(newIndex)
        }
    };

    clickLeft = () => {
        if (this.state.index === 0) {
            this.setState({
                index: (this.state.images.length - 1)
            })
            console.log(this.state.index)
        } else {
            let newIndex = this.state.index - 1;
            this.setState({
                index: newIndex
            })
            console.log(newIndex)
        }
    };

    render() {
        return (
            <header className={style.mainHeader}>
                <div className={style.mainHeaderSlider}>
                    <div className={style.mainHeaderSliderImg}>
                        <img src={this.state.images[this.state.index].img} alt="" />
                    </div>
                    <div className={style.container}>
                        <Text />
                        <div className={style.SliderBtnRight} onClick={this.clickRight}>
                        </div>
                        <div className={style.SliderBtnLeft} onClick={this.clickLeft}>
                        </div>
                        <button  className={style.mainBtn}>
                            <span>Feedback</span>
                        </button>
                    </div>
                </div>
            </header>
        )
    }
}