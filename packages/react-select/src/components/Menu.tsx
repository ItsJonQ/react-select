import * as React from 'react';
import styled from 'styled-components';
import classnames from 'classnames';

import {CLASS_NAMES} from '../classNames';

export interface SelectMenuProps {
  className?: string;
  children?: React.ReactNode;
}

export const defaultProps = {
  className: '',
};

export const Menu: React.FC<SelectMenuProps> = props => {
  const mergedProps = {...defaultProps, ...props};
  const {className, ...additionalProps} = mergedProps;

  const classes = classnames(className, CLASS_NAMES.Menu);

  return (
    <MenuUI {...additionalProps} className={classes}>
      Children
    </MenuUI>
  );
};

export const MenuUI = styled.div``;

export default Menu;
