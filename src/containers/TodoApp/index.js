import React, { Component } from 'react';

import Header from './Header';
import List from './List';
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
        <List />
        <Footer />
      </div>
    );
  }
}

export default TodoApp;
