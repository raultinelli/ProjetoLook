import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import Reducers from './src/Reducers';

import Preload from './src/Preload';
import Home from './src/Home';
import Login from './src/Login';
import Cadastro from './src/Cadastro';
import ConfigScreenProfile from './src/ConfigScreenProfile';


let store = createStore(Reducers, applyMiddleware(ReduxThunk));

const Navegador = StackNavigator({

  Preload:{
    screen:Preload
  },
  Home:{
    screen:Home
  },
  Login:{
    screen:Login
  },
  Cadastro:{
    screen:Cadastro
  },

  ConfigScreenProfile:{
    screen:ConfigScreenProfile,
    navigationOptions:{header:null}
  }

});

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navegador />
      </Provider>
    );
  }
}

console.disableYellowBox = true;