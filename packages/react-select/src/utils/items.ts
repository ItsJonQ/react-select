import {isDefined} from './index';
import {SelectOptions, SelectValue} from '../types';

export function serializeOptions(options: SelectOptions) {
  return options.map(item => {
    const {id, value} = item;
    const key = isDefined(id) ? id : value;

    return {
      ...item,
      id: key,
      key,
    };
  });
}

export function getItemByValue(options: SelectOptions, value: SelectValue) {
  return options.find(option => option.value == value);
}

export function getInitialItem(options: SelectOptions, value?: SelectValue) {
  const fallbackItem = options[0];

  if (!isDefined(value)) {
    return fallbackItem;
  }

  const item = getItemByValue(options, value);

  return item || fallbackItem;
}
