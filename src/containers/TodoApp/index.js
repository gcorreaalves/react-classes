import React, { Component } from 'react';

import Header from './Header';
import Body from './Body';
import Footer from './Footer';

const style = {
  width: 600,
  margin: '0 auto',
};

class TodoApp extends Component {
  render() {
    return (
      <div style={style}>
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default TodoApp;
