import React from 'react';

import styled from 'styled-components';

const CounterStyled = styled.div`
  font-size: 14px;
`;

export default props => <CounterStyled>{props.missing} missing</CounterStyled>;
