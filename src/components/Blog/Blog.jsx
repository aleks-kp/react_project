import React from 'react';
import style from './Blog.module.css';
import Post from './Post/Post.jsx';
import Button from './../Button/Button';

export default class Blog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            postsData: [
                { id: 1, img: 'img/main/posts/notebook.png', title: 'Lorem ipsum dolor sit amet', content: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium.', link: '', date: '5', month: 'Oct.' },
                { id: 2, img: 'img/main/posts/ship.png', title: 'Lorem ipsum dolor sit amet', content: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium.', link: '', date: '2', month: 'Oct.' },
                { id: 3, img: 'img/main/posts/jeans.png', title: 'Lorem ipsum dolor sit amet', content: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium.', date: '30', month: 'Sep.' }
            ],
            textAreaValue: ''
        }
    }

    addPost = () => {
        let postsData = this.state.postsData; 
        const newPost = {
            img: 'img/main/posts/notebook.png',
            title: 'Lorem ipsum dolor sit amet',
            content: this.state.textAreaValue,
            link: '',
            date: '5',
            month: 'Oct.'
        };
        postsData.push(newPost);
        this.setState({
            postsData:postsData
        })
    }

    render() {
        let postElements = this.state.postsData.map((post, index) =>
            <Post
                img={post.img}
                title={post.title}
                content={post.content}
                link={post.link}
                date={post.date}
                month={post.month}
                key={index}
            />);
        return (
            <section className={style.blog}>
                <span className={style.blog__Title}>
                    Recent Posts.
                        </span>
                <p className={style.blog__Text}>
                    Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium.
                        </p>
                <article className={style.blogPostWrap}>
                    {postElements}
                </article>
                <textarea onChange={e=>this.setState({textAreaValue:e.target.value})} className={style.newPost} name="" id="" cols="30" rows="10"></textarea>
                <Button addPost={this.addPost} />
            </section>
        )
    }
}