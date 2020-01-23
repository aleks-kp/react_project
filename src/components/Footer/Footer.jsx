import React from 'react';
import style from './Footer.module.css';
import Icon from '../Icon/Icon';
import FooterPost from './FooterPost';
import FooterTwit from './FooterTwit';
import Widget from './Widget';

const Footer = () => {
    return (
    <footer className={style.firstFooter}>
        <div className={style.firstFooterLogo}>
            <Icon />
            <span>Waxom</span>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci suscipit lobortis claritatem.
            </p>
            <a href="#">Read More</a>
        </div>
        <div style={{paddingTop: '24px'}}>
            <span style={{color: '#ffffff',
                fontFamily: 'raleway-regular',
                fontSize: '24px',
                fontWeight: '700',}}>
                Recent Posts</span>
            <FooterPost data='September 08, 2015' text='Lorem ipsum dolor sit amet, consec&shytetuer adipiscing elit' />
            <FooterPost data='September 08, 2015' text='Diam nonummy nibh euismod tincid&shyunt ut laoreet dolore magna' />
            <FooterPost data='September 08, 2015' text='Claritas est etiam processus dynamic&shyus, qui sequitur mutationem per seac&shyula quarta decima' />
        </div>
        <div className={style.firstFooterTwitter}>
            <span>Our Twitter</span>
            <FooterTwit link='link' text='Cum soluta nobis eleifend option congue nihil imperdiet doming' time='3 mins ago' />
            <FooterTwit link='#envato' text='notare quam littera gothica, quam nunc putamus parum anteposuerit litterarum' time='5 hours ago' />
            <FooterTwit link='bit.ly/1Hniso7' text='Soluta nobis option' time='20 days ago' />
        </div>
        <div className={style.firstFooterWidget}>
            <span>Dribbble Widget
            </span>
            <div className={style.firstFooterWidgetWrap}>
                <Widget img={'img/footer/phone.png'} />
                <Widget img={'img/footer/paper.png'} />
                <Widget img={'img/footer/book.png'} />
                <Widget img={'img/footer/icons.png'} />
            </div>
        </div>
    </footer>
    )
}

export default Footer;