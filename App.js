/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider} from 'react-redux';
import store from './src/store';
import ConnectedContainer from './src/containers/ConnectedContainer';
import PureContainer from './src/containers/PureContainer';

const USE_CONNECTED_CONTAINER = true;
const App: () => React$Node = () => {
    let container;
    if (USE_CONNECTED_CONTAINER) {
        container = (<ConnectedContainer/>);
    }
    else {
        container = (<PureContainer/>);
    }
    return <Provider store={store}
    >
        {container}
    </Provider>;
};

export default App;
