import * as React from 'react';
import styled from 'styled-components';
import classnames from 'classnames';

import {useSelectContext} from '../Context';
import {CLASS_NAMES} from '../classNames';

export interface SelectButtonProps {
  className?: string;
  children?: React.ReactNode;
}

export const defaultProps = {
  className: '',
};

export const Button: React.FC<SelectButtonProps> = props => {
  const mergedProps = {...defaultProps, ...props};
  const {className, ...additionalProps} = mergedProps;
  const {selected} = useSelectContext();

  const classes = classnames(className, CLASS_NAMES.Button);
  const {label} = selected;

  return (
    <ButtonUI {...additionalProps} className={classes}>
      {label}
    </ButtonUI>
  );
};

export const ButtonUI = styled.button`
  align-items: center;
  background-color: rgb(255, 255, 255);
  border-color: rgb(204, 204, 204);
  border-bottom-color: rgb(190, 190, 190);
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  font-family: inherit;
  font-size: inherit;
  flex-wrap: wrap;
  justify-content: space-between;
  min-height: 38px;
  outline: 0px !important;
  padding: 8px 16px;
  position: relative;
  transition: all 100ms ease 0s;

  &:hover {
    border-color: rgb(179, 179, 179);
    border-bottom-color: rgb(160, 160, 160);
    background: rgba(245, 245, 240);
  }

  &:focus {
    border-color: rgba(0, 0, 0, 0.3);
    border-bottom-color: rgba(0, 0, 0, 0.4);
    box-shadow: 0 0 0 3px rgba(38, 132, 255, 0.3);
  }
`;

export default Button;
