import React from 'react';
import styled from 'styled-components';

import Button from './Button';

const TodoStyled = styled.div`
  font-size: 18px;
  line-height: 1;
  text-decoration: ${({ completed }) => completed ? 'line-through' : ''};
  margin: 0;
  cursor: pointer;
  &:before{
    content: '';
    background: url('${(props) => props.completed
        ? 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#bddad5" stroke-width="3"/><path fill="#5dc2af" d="M72 25L42 71 27 56l-4 4 20 20 34-52z"/></svg>'
        : 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#ededed" stroke-width="3"/></svg>'
    }') no-repeat;
    display:inline-block;
    vertical-align:middle;
    height: 40px;
    width: 40px;
    margin-right: 10px;
  }
`;

TodoStyled.displayName = 'TodoStyled';

export default (props) => (
  <div className="clear" style={{margin: "10px 0"}}>
    <TodoStyled
      className="float-left"
      completed={props.completed}
      onClick={props.handleTodoClick}
    >
      {props.children}
    </TodoStyled>
    <Button
      className="float-right"
      danger
      onClick={props.handleTodoDeleteClick}
    >
      Delete
    </Button>
  </div>
);
