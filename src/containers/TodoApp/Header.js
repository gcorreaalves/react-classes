import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { addTodo } from './actions';

import H1 from '../../components/H1';
import Input from '../../components/Input';

class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.handleInputEnter = this.handleInputEnter.bind(this);
  }

  handleInputEnter(ev) {
    const text = ev.target.value;
    if (ev.keyCode === 13 && text.length > 3) {
      this.props.addTodo(text);
      ev.target.value = '';
    }
  }

  render() {
    return (
      <div>
        <H1 className="text-center">Todo Application</H1>
        <Input
          placeholder="What to do?"
          onKeyDown={this.handleInputEnter}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addTodo: (text) => dispatch(addTodo(text)),
});

export default connect(null, mapDispatchToProps)(Header);
