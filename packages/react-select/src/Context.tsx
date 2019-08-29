import * as React from 'react';
import classnames from 'classnames';

const {useState, createContext, useContext} = React;

import {getInitialItem, noop} from './utils/index';
import {SelectContextProps, SelectProps} from './types';

export const defaultProps = {
  disabled: false,
  options: [],
  onChange: noop,
};

export const defaultContext: SelectContextProps = {
  ...defaultProps,
  classes: 'SelectComponent',
};

export const SelectContext = createContext(defaultContext);
export const useSelectContext = (): SelectContextProps =>
  useContext(SelectContext);

export const SelectProvider = (props: SelectProps) => {
  const {Provider} = SelectContext;
  const {children, className, options, value, ...additionalProps} = props;

  const initialItem = getInitialItem(options, value);
  const [selected] = useState(initialItem);

  const classes = classnames(defaultContext.classes, className);

  const contextProps = {
    ...additionalProps,
    classes,
    options,
    selected,
    value,
  };

  return <Provider value={contextProps}>{children}</Provider>;
};
