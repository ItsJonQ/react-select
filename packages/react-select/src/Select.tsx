import * as React from 'react';

import {SelectOptions, SelectValue} from './types';
import {SelectProvider, SelectProviderProps} from './Context';
import {SelectElement} from './Element';
import {Button} from './components';
import {noop} from './utils';

export interface SelectProps {
  className?: string;
  disabled?: boolean;
  options?: SelectOptions;
  onChange?: (SelectValue, {event: HTMLInputElement}) => void;
  value?: SelectValue;
}

const defaultProps = {
  className: '',
  disabled: false,
  options: [],
  onChange: noop,
  value: '',
};

export const Select: React.FC<SelectProps> = props => {
  const mergedProps: SelectProviderProps = {...defaultProps, ...props};

  return (
    <SelectProvider {...mergedProps}>
      <Button />
      <SelectElement />
    </SelectProvider>
  );
};

export default Select;
