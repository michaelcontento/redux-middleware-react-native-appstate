[redux-middleware-react-native-appstate][]
==========================================

[![license](https://img.shields.io/npm/l/redux-middleware-react-native-appstate.svg?style=flat-square)](https://www.npmjs.com/package/redux-middleware-react-native-appstate)
[![npm version](https://img.shields.io/npm/v/redux-middleware-react-native-appstate.svg?style=flat-square)](https://www.npmjs.com/package/redux-middleware-react-native-appstate)
[![npm downloads](https://img.shields.io/npm/dm/redux-middleware-react-native-appstate.svg?style=flat-square)](https://www.npmjs.com/package/redux-middleware-react-native-appstate)
[![Code Climate](https://codeclimate.com/github/michaelcontento/redux-middleware-react-native-appstate/badges/gpa.svg)](https://codeclimate.com/github/michaelcontento/redux-middleware-react-native-appstate)

Glue [AppState][] from [react-native][] to [Redux][].

## Installation

    npm install --save redux-middleware-react-native-appstate

## Usage

```js
// Just import the middleware and add it to your store
import { createStore, applyMiddleware } from 'redux';
import { middleware as appState } from 'redux-middleware-react-native-appstate';
const createStoreWithMiddleware = applyMiddleware(appState)(createStore);

// And in your reducers receive the value
import { TYPE as APP_STATE } from 'redux-middleware-react-native-appstate';

function appStateReducer(state = {}, action) {
    switch (action.type) {
        case APP_STATE:
            console.log('AppState:', action.payload);

        default:
            return state;
    }
}

```

## Todo

- Write tests for everything!

  [Redux]: https://github.com/gaearon/redux
  [redux-middleware-react-native-appstate]: https://github.com/michaelcontento/redux-middleware-react-native-appstate
  [react-native]: https://facebook.github.io/react-native/
  [AppState]: https://facebook.github.io/react-native/docs/appstateios.html#content
