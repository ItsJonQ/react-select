import * as React from 'react';
import classnames from 'classnames';

const {useState, createContext, useContext} = React;

import {
  SelectProviderProps,
  ContextProps,
  SelectOnChange,
} from './Select.types';
import {CLASS_NAMES} from './classNames';
import {
  createUniqueIdFactory,
  getInitialItem,
  getItemByValue,
  noop,
  serializeOptions,
} from './utils';

export const defaultProps = {
  className: '',
  disabled: false,
  isBlock: false,
  options: [],
  onChange: noop,
  value: '',
};

export const defaultContext = {
  ...defaultProps,
  classes: CLASS_NAMES.Base,
};

export const SelectContext = createContext<ContextProps | undefined>(undefined);

export const useSelectContext = (): ContextProps => {
  const ctx = useContext(SelectContext);
  if (!ctx) {
    throw new Error('Please use SelectProvider');
  }
  return ctx;
};

const createId = createUniqueIdFactory('react-select');

export const SelectProvider: React.FC<SelectProviderProps> = props => {
  const {Provider} = SelectContext;
  const {
    children,
    className,
    id: idProp,
    options: optionsProp,
    onChange: onChangeProp,
    value: valueProp,
    ...additionalProps
  } = props;

  /**
   * TODO:
   * Will be refactored to use reselect for memoization
   */
  const options = serializeOptions(optionsProp);
  const initialItem = getInitialItem(options, valueProp);

  const classes = classnames(defaultContext.classes, className);

  /**
   * TODO:
   * Refactor to use useReducer to better organize chunks of state
   */
  const [id] = useState(idProp || createId());
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
    id,
    options,
    selected,
    setSelected,
    value,
  };

  return <Provider value={contextProps}>{children}</Provider>;
};
