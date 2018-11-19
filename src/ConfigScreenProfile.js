import React, { Component } from 'react';
import { DrawerNavigator, DrawerActions } from 'react-navigation';

import TelaInicial from './TelaInicial';
import TabTwo from './TabTwo';
import ConfigUser from './ConfigUser';
import Pesquisar from './Search';


const Navegador = DrawerNavigator({
  Inicial:{
    screen:TelaInicial
  },
  TabTwo:{
    screen:TabTwo
  },
  Configuração:{
    screen:ConfigUser
  },
  Pesquisar:{
    screen:Pesquisar,
    title:null
  }
});

export default Navegador;