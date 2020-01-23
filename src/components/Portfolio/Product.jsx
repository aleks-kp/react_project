import React from 'react';
import style from './Product.module.css';
import ProductDescr from './ProductDescr';


export default class Product extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            productData: [
                { img: 'img/main/products/phone.png', descr: 'Product Description', title: 'Claritas Etiam Processus', text: 'Photography, Nature' },
                { img: 'img/main/products/mountain.png', descr: 'Product Description 1', title: 'Quam Nutamus Farum', text: 'Graphic Design, Mock-Up' },
                { img: 'img/main/products/book.png', descr: 'Product Description 2', title: 'Usus Legentis Videntur', text: 'Photography, Holiday' },
                { img: 'img/main/products/mountain2.png', descr: 'Product Description 3', title: 'Claritas Etiam Processus', text: 'Photography, Nature' },
                { img: 'img/main/products/book2.png', descr: 'Product Description 4', title: 'Quam Nutamus Farum', text: 'Graphic Design, Mock-Up' },
                { img: 'img/main/products/sea.png', descr: 'Product Description 5', title: 'Usus Legentis Videntur', text: 'Photography, Holiday' },
            ],
            productDataLoad: [
                { img: 'img/main/products/phone.png', descr: 'Product Description 6', title: 'Claritas Etiam Processus', text: 'Photography, Nature' },
                { img: 'img/main/products/mountain.png', descr: 'Product Description 7', title: 'Quam Nutamus Farum', text: 'Graphic Design, Mock-Up' },
                { img: 'img/main/products/book.png', descr: 'Product Description 8', title: 'Usus Legentis Videntur', text: 'Photography, Holiday' },
            ],
        }
    };

    loadMore = () => {
        const arr1 = this.state.productData.concat(this.state.productDataLoad);
        this.setState ({
            productData:arr1
        })
    };

    render() {
        let productCard = this.state.productData.map((card, index) =>
            <ProductDescr 
                img={card.img}
                descr={card.descr}
                title={card.title}
                text={card.text}
                key={index}
            />)
        return (
            <section className={style.productExampleWrap}>
                {productCard}

                <button onClick={this.loadMore} className={style.product__Button}>
                    Load more
            </button>
            </section>
        )
    }
}


