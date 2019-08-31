import * as React from 'react';

import {SelectProps, SelectProviderProps} from './Select.types';
import {SelectProvider, defaultProps} from './Context';
import {SelectElement} from './Element';
import {Button} from './components';

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
