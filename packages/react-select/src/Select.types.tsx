export type SelectOptions = Array<any>;
export type SelectValue = string;

export type SelectOnChange = (SelectValue, {event: HTMLInputElement}) => void;

export interface SelectProps {
  className?: string;
  disabled?: boolean;
  id?: string;
  isBlock?: boolean;
  options?: SelectOptions;
  onChange?: SelectOnChange;
  value?: SelectValue;
}

export interface SelectProviderProps {
  className?: string;
  disabled: boolean;
  isBlock: boolean;
  id?: string;
  options: SelectOptions;
  onChange: SelectOnChange;
  value: SelectValue;
}

export interface ContextProps extends SelectProviderProps {
  classes: string;
  id: string;
  selected: any;
}
