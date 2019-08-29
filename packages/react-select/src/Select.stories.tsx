import React from 'react';
import {storiesOf} from '@storybook/react';
import {Select} from './Select';

const stories = storiesOf('Select', module);

stories.add('Default', () => {
  const props = {
    options: [
      {
        id: 1,
        value: 1,
        label: 'One',
      },
      {
        id: 2,
        value: 2,
        label: 'Two',
      },
      {
        id: 3,
        value: 3,
        label: 'Three',
      },
    ],
    onChange: value => console.log(value),
  };

  return <Select {...props} />;
});
