import React from 'react';
import style from './ProductDescr.module.css';

export default class ProductDescr extends React.Component {
   constructor(props) {
        super(props)
        this.state = {
            showDescription: true,
        }
    }

    showDescr = () => {
        this.setState({
            showDescription: !this.state.showDescription
        })
        console.log(this.state.showDescription)
    };

    render() {
        return (
            this.state.showDescription
            ? (<div className={style.productExample}>
                <img clasNames={style.productExample__Img} src={this.props.img} alt="" />
                <div className={style.productExampleDescr}>
                    <span className={style.productExampleDescr__Title}>
                        {this.props.title}
                    </span>
                    <p className={style.productExampleDescr__Text}>
                        {this.props.text}
                    </p>
                </div>
                <button onClick={this.showDescr} className={style.productExample__Link}></button>
                <button onClick={this.showDescr} className={style.productExample__Lens}></button>
            </div>)
            :(<div className={style.productExample}>
                <div className={style.longDescr}>{this.props.descr}</div>
                <div className={style.productExampleDescr}>
                    <span className={style.productExampleDescr__Title}>
                        {this.props.title}
                    </span>
                    <p className={style.productExampleDescr__Text}>
                        {this.props.text}
                    </p>
                </div>
                <button onClick={this.showDescr} className={style.productExample__Link}></button>
                <button onClick={this.showDescr} className={style.productExample__Lens}></button>
            </div>)
        )
    }
}


