import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const CounterStyled = styled.div`
  font-size: 14px;
`;

const TodoCounter = props => <CounterStyled>{props.missing} missing</CounterStyled>;
TodoCounter.propTypes = {
  missing: PropTypes.number.isRequired,
};

export default TodoCounter;
