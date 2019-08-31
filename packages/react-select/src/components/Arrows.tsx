import * as React from 'react';
import styled from 'styled-components';
import classnames from 'classnames';

import {CLASS_NAMES} from '../classNames';

export interface SelectArrowsProps {
  className?: string;
}

export const defaultProps = {
  className: '',
  role: 'presentation',
};

export const Arrows: React.FC<SelectArrowsProps> = props => {
  const mergedProps = {...defaultProps, ...props};
  const {className, ...additionalProps} = mergedProps;

  const classes = classnames(className, CLASS_NAMES.Arrows);

  return <ArrowsUI {...additionalProps} className={classes} />;
};

export const ArrowsUI = styled('div')`
  align-self: center;
  box-sizing: border-box;
  color: #444;
  display: block;
  padding: 0;
  pointer-events: none;
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  width: 18px;
  z-index: 1;

  &::before,
  &::after {
    border-left: 3px solid transparent;
    border-right: 3px solid transparent;
    box-sizing: border-box;
    content: '';
    margin: 2px;
    position: absolute;
  }

  &::before {
    border-bottom: 5px solid currentColor;
    bottom: -1px;
  }

  &::after {
    border-top: 5px solid currentColor;
    top: -1px;
  }
`;

export default Arrows;
