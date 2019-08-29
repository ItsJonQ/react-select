import * as React from 'react';

import {SelectProps} from './types';
import {SelectProvider, defaultProps} from './Context';
import {SelectElement} from './Element';

export const Select = (props: SelectProps) => {
  return (
    <SelectProvider {...props}>
      <SelectElement />
    </SelectProvider>
  );
};

Select.defaultProps = defaultProps as Partial<SelectProps>;

export default Select;
