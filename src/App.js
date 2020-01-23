import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Portfolio from './components/Portfolio/Portfolio';
import { BrowserRouter, Route } from 'react-router-dom';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route path='/' exact render={() => <Home />} />
          <Route path='/blog' component={Blog} />
          <Route path='/portfolio' component={Portfolio} />
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}