<!-- Image here -->
<img src="./cinch-logo.png" alt='Cinch Logo Fixed'>

[![NPM](https://nodei.co/npm/cinch-layout.png)](https://nodei.co/npm/cinch-layout/)

[![npm version](https://badge.fury.io/js/cinch-layout.svg)](https://badge.fury.io/js/cinch-layout)

# Cinch

Not ready to be used.

## Get Started

### Installation

`npm install --save cinch-layout`

### Usage

```js
import { CinchProvider, CinchBounds, CinchBox } from "./src";

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <CinchProvider>
          <CinchBounds flex={1} debug flexDirection='vertical'>
            <CinchBox debug style={{width: "50%"}}>
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
            <CinchBox debug style={{marginHorizontal: 20}}>
              <Text>Hello</Text>
            </CinchBox>
          </CinchBounds>
        </CinchProvider>
      </SafeAreaView>
    );
  }
}
```
