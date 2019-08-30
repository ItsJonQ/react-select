import * as React from 'react';
import classnames from 'classnames';

const {useState, createContext, useContext} = React;

import {
  SelectContextProps,
  SelectOnChange,
  SelectOptions,
  SelectValue,
} from './types';
import {CLASS_NAMES} from './classNames';
import {getInitialItem, getItemByValue, noop, serializeOptions} from './utils';

export const defaultProps = {
  disabled: false,
  options: [],
  onChange: noop,
};

export const defaultContext: SelectContextProps = {
  ...defaultProps,
  classes: CLASS_NAMES.Base,
};

export interface ContextProps {
  classes: string;
  disabled: boolean;
  options: SelectOptions;
  onChange: SelectOnChange;
  selected: any;
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
  const {
    children,
    className,
    options: optionsProp,
    onChange: onChangeProp,
    value: valueProp,
    ...additionalProps
  } = props;

  const options = serializeOptions(optionsProp);
  const initialItem = getInitialItem(options, valueProp);

  const classes = classnames(defaultContext.classes, className);

  const [selected, setSelectedState] = useState(initialItem);
  const [value, setValue] = useState(valueProp);

  const setSelected = item => {
    setSelectedState(item);
  };

  const onChange: SelectOnChange = (value, props) => {
    const nextItem = getItemByValue(options, value);

    setSelected(nextItem);
    setValue(value);

    onChangeProp(value, props);
  };

  const contextProps = {
    ...additionalProps,
    classes,
    onChange,
    options,
    selected,
    setSelected,
    value,
  };

  return <Provider value={contextProps}>{children}</Provider>;
};
