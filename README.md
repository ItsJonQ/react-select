# design-system-example

[![CircleCI](https://circleci.com/gh/jameslnewell/design-system-example.svg?style=svg)](https://circleci.com/gh/jameslnewell/design-system-example)

A demonstration of the tooling setup for a React based Design System.

|            |                                                                                                                       |
| ---------- | --------------------------------------------------------------------------------------------------------------------- |
| Website    | [design-system-example-website.jameslnewell.now.sh](https://design-system-example-website.jameslnewell.now.sh/)       |
| Playground | [design-system-example-playground.jameslnewell.now.sh](https://design-system-example-playground.jameslnewell.now.sh/) |

## Installation

To install the necessary dependencies run:

```
nvm use
yarn
```

## Component playground

To start the component playground run:

```
yarn run start:playground
```

## Documentation website

To start the documentation website run:

```
yarn run start:website
```

Then browse to:

```
http://localhost:8000/
```

## Linting

To run the lint and type checks run:

```
yarn run lint
yarn run type
```

## Testing

To run the tests run:

```
yarn run test
```

## To Do

- bundle size comparison
- prop tables generated from typescript types - https://www.npmjs.com/package/gatsby-transformer-react-docgen
- notifications back to github e.g. dangerjs messages, bundle size, deployment urls
