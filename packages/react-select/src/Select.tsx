import * as React from 'react';

import {SelectOptions, SelectValue} from './types';
import {SelectProvider, SelectProviderProps} from './Context';
import {SelectElement} from './Element';

export interface SelectProps {
  className?: string;
  disabled?: boolean;
  options?: SelectOptions;
  onChange?: (SelectValue, {event: HTMLInputElement}) => void;
  value?: SelectValue;
}

export const Select: React.FC<SelectProps> = props => {
  const mergedProps: SelectProviderProps = {...defaultProps, ...props};

  return (
    <SelectProvider {...mergedProps}>
      <SelectElement />
    </SelectProvider>
  );
};

const defaultProps = {
  className: '',
  disabled: false,
  options: [],
  onChange: () => {},
  value: '',
};

export default Select;
