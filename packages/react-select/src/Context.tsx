import * as React from 'react';
import classnames from 'classnames';

const {useState, createContext, useContext} = React;

import {getInitialItem, noop} from './utils/index';
import {SelectContextProps, SelectOptions, SelectValue} from './types';

export const defaultProps = {
  disabled: false,
  options: [],
  onChange: noop,
};

export const defaultContext: SelectContextProps = {
  ...defaultProps,
  classes: 'SelectComponent',
};

export interface ContextProps {
  classes: string;
  disabled: boolean;
  options: SelectOptions;
  onChange: (SelectValue, {event: HTMLInputElement}) => void;
  value: SelectValue;
}

export const SelectContext = createContext<ContextProps | undefined>(undefined);

export const useSelectContext = (): ContextProps => {
  const ctx = useContext(SelectContext);
  if (!ctx) {
    throw new Error('Please use SelectProvider');
  }
  return ctx;
};

export interface SelectProviderProps {
  className?: string;
  disabled: boolean;
  options: SelectOptions;
  onChange: (SelectValue, {event: HTMLInputElement}) => void;
  value: SelectValue;
}

export const SelectProvider: React.FC<SelectProviderProps> = props => {
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
