import * as React from 'react';

import {useSelectContext} from './Context';

export const SelectElement = () => {
  const {classes, options, onChange, value} = useSelectContext() as any;

  const handleOnChange = event => {
    onChange(event.target.value, event);
  };

  return (
    <select className={classes} value={value} onChange={handleOnChange}>
      {options.map(item => (
        <option value={item.value}>{item.label}</option>
      ))}
    </select>
  );
};

export default SelectElement;
