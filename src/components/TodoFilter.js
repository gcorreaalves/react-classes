import React from 'react';

import A from './A';

export default (props) => (
  <ul className="unstyled list-inline" style={{ margin: 0 }}>
    <li>
      <A onClick={() => props.handleFilter('all')}>All</A>
    </li>
    <li>
      <A onClick={() => props.handleFilter('active')}>Active</A>
    </li>
    <li>
      <A onClick={() => props.handleFilter('completed')}>Completed</A>
    </li>
  </ul>
);
