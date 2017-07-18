import styled from 'styled-components';

const border = (props) => {
  if (props.danger) {
    return 'tomato';
  }
  return 'dodgerblue';
};

const color = (props) => {
  if (props.danger) {
    return 'salmon';
  }
  return 'deepskyblue';
};

const background = (props) => {
  if (props.outline) {
    return 'transparent';
  }
  return color(props);
};

const outline = (props) => {
  if (props.outline) {
    return color(props);
  }
  return 'white';
};

export default styled.button`
  background-color: ${background};
  border: 1px solid ${border};
  border-radius: 4px;
  color: ${outline};
  line-height: 1.8;
  padding: 5px 10px;
  &:hover{
    background-color: ${color};
    color: white;
  }
`;
