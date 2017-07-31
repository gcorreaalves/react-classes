import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from './actions';

import Todo from '../../components/Todo';

const filterTodos = (todos, filter = 'all') => {
  switch (filter) {
    case 'active':
      return todos.filter(todo => !todo.completed);
    case 'completed':
      return todos.filter(todo => todo.completed);
    default:
      return [...todos];
  }
};


class List extends PureComponent {
  constructor(props) {
    super(props);
    this.onTodoClick = this.onTodoClick.bind(this);
    this.onTodoDeleteClick = this.onTodoDeleteClick.bind(this);
  }

  onTodoClick(uuid) {
    this.props.actions.toggleTodo(uuid);
  }

  onTodoDeleteClick(uuid) {
    this.props.actions.removeTodo(uuid);
  }

  render() {
    const todos = this.props.todos;
    return (
      <ul className="unstyled">
        {todos.map(todo => (
          <li key={todo.uuid}>
            <Todo
              key={todo.uuid}
              completed={todo.completed}
              handleTodoClick={() => this.onTodoClick(todo.uuid)}
              handleTodoDeleteClick={() => this.onTodoDeleteClick(todo.uuid)}
            >
              {todo.text}
            </Todo>
          </li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: filterTodos(state.todos, state.filter),
});

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actionCreators, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
