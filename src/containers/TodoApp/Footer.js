import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { filterTodo } from './actions';

import Button from '../../components/Button';
import TodoCounter from '../../components/TodoCounter';
import TodoFilter from '../../components/TodoFilter';

const FooterStyled = styled.div`
  border-top: 1px solid #eee;
  margin-top: 10px;
  padding-top: 30px;
  > div {
    line-height:40px;
    vertical-aligh: middle;
    float:left;
    width: 33%;
  }
`;

class Footer extends PureComponent {
  constructor(props) {
    super(props);
    this.handleFilterClick = this.handleFilterClick.bind(this);
  }

  handleFilterClick(filter) {
    this.props.todoFilter(filter);
  }

  countMissing() {
    return this.props.todos.filter(todo => !todo.completed).length;
  }
  render() {
    return (
      <FooterStyled>
        <div>
          <TodoCounter missing={this.countMissing()} />
        </div>
        <div>
          <TodoFilter handleFilter={this.handleFilterClick} />
        </div>
        <div className="text-right">
          <Button danger outline>Delete All</Button>
        </div>
      </FooterStyled>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  todoFilter: (filter) => dispatch(filterTodo(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);

