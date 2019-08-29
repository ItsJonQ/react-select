import {isDefined} from './index';
import {SelectOptions, SelectValue} from '../types';

export function getInitialItem(options: SelectOptions, value?: SelectValue) {
  const fallbackItem = options[0];

  if (!isDefined(value)) {
    return fallbackItem;
  }

  const item = options.find(option => option.value === value);

  return item || fallbackItem;
}
