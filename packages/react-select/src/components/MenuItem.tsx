import * as React from 'react';
import styled from 'styled-components';
import classnames from 'classnames';

import {CLASS_NAMES} from '../classNames';

export interface SelectMenuItemProps {
  className?: string;
  children: React.ReactNode;
}

export const defaultProps = {
  className: '',
};

export const MenuItem: React.FC<SelectMenuItemProps> = props => {
  const mergedProps = {...defaultProps, ...props};
  const {className, ...additionalProps} = mergedProps;

  const classes = classnames(className, CLASS_NAMES.MenuItem);

  return (
    <MenuItemUI {...additionalProps} className={classes}>
      Children
    </MenuItemUI>
  );
};

export const MenuItemUI = styled.div``;

export default MenuItem;
