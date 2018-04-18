import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './app/store';
import Home from './app/components/home';
import Detail from './app/components/detail';

import { StackNavigator } from 'react-navigation';

const AppStack = StackNavigator(
    {
        Home: { screen: Home },
        Detail: { screen: Detail }
    },
    {
        headerMode: 'screen',
        navigationOptions: {
            headerStyle: {
                backgroundColor: 'orange'
            },
            headerTintColor: 'white'
        }
    }
);

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppStack />
            </Provider>
        );
    }
}

console.disableYellowBox = true;
