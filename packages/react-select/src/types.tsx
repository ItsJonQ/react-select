import * as React from 'react';

export type SelectOptions = Array<any>;
export type SelectValue = string;

export type SelectOnChange = (SelectValue, {event: HTMLInputElement}) => void;

export interface SelectBaseProps {
  disabled?: boolean;
  options?: SelectOptions;
  onChange?: (SelectValue, {event: HTMLInputElement}) => void;
  value?: SelectValue;
}

export interface SelectContextProps extends SelectBaseProps {
  classes: string;
  disabled?: boolean;
  options?: SelectOptions;
  onChange?: (SelectValue, {event: HTMLInputElement}) => void;
  value?: SelectValue;
}

export interface SelectProps extends SelectBaseProps {
  children?: React.ReactNode;
  className?: string;
}
