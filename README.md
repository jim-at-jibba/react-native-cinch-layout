<!-- Image here -->
<img src="./cinch-logo.png" alt='Cinch Logo Fixed'>

[![NPM](https://nodei.co/npm/cinch-layout.png)](https://nodei.co/npm/cinch-layout/)

[![npm version](https://badge.fury.io/js/cinch-layout.svg)](https://badge.fury.io/js/cinch-layout)

# Cinch

This is a new package and so is in beta release. Please leave feed back in the issues secion on Github with any bugs or suggestions. Thanks

## Get Started

## Requirements

The follow dependencies must be installed in your project in order for cinch to work.

- [`styled-components`](https://github.com/styled-components/styled-components) 1.1.3 and up

### Installation

`npm install --save cinch-layout`

### Usage

```js
import { CinchProvider, CinchBounds, CinchBox } from './src'

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <CinchProvider>
          <CinchBounds flex={1} debug flexDirection="vertical">
            <CinchBox debug style={{ width: '50%' }}>
              <Text>Hello</Text>
            </CinchBox>

            <CinchBox flex={2} debug={true}>
              <Text>Hello</Text>
            </CinchBox>

            <CinchBox flex={1} debug={true}>
              <Text>Hello</Text>
            </CinchBox>
          </CinchBounds>
          <CinchBounds>
            <CinchBox debug valign={'center'} halign="right">
              <Text>Hello</Text>
            </CinchBox>
            <CinchBox debug style={{ marginHorizontal: 20 }}>
              <Text>Hello</Text>
            </CinchBox>
          </CinchBounds>
        </CinchProvider>
      </SafeAreaView>
    )
  }
}
```

## Documentation

All Components accept the following props. The `style` props can also be passed as usual
which will overwrite any conflicting styles.

### `CinchProvider`

#### Props

### `CinchBounds`

#### Props

- `debug` : `boolean`
  - Outlines the grid system so you can visualize the layout
- `flex`: `number` - structure: `2`
  - Controls the CSS `flex` property
- `flexDirection`: `string` - `horizontal` or `vertical`
  - Sets the primary axis the children should be in line with
- `wrap`: `boolean`
  - Sets whether the children should wrap when there's no more room on the primary axis
- `valign`: `string` - `top`, `center`, or `bottom`
  - Alignment of children along the vertical axis
- `halign`: `string` - `left`, `center`, or `right`
  - Alignment of children along the horizontal axis

### `CinchBox`

#### Props

- `debug` : `boolean`
  - Outlines the grid system so you can visualize the layout
- `flex`: `string` - structure: `grow shrink basis`
