import React from 'react';
import {storiesOf} from '@storybook/react';
import {createGlobalStyle} from 'styled-components';
import {Select} from './Select';

const stories = storiesOf('Select', module);

const GlobalStyle = createGlobalStyle`
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

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

  return (
    <>
      <GlobalStyle />
      <Select {...props} />
    </>
  );
});
