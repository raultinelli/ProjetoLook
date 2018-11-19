import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, Tab, Tabs, TabHeading, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { DrawerActions, NavigationActions, StackActions } from 'react-navigation';

import TabOne from './TabOne';
import TabTwo from './TabTwo';
import TabThree from './TabThree';
import Search from './Search';


export class TelaInicial extends Component {


  constructor(props) {
    super(props);
    this.state = {};

    this.search = this.search.bind(this);

  }

  search() {
    this.props.navigation.navigate('Pesquisar');
  }

  componentDidUpdate() {
    this.directPages();
  }

  directPages() {

    if(this.props.status == 2) {
      this.props.navigation.dispatch(StackActions.reset({
        index:0,
        key:null,
        actions:[
          NavigationActions.navigate({routeName:'Home'})
        ]
      }));
    }
  }

  render() {
    return (
      <Container>
        <Header androidStatusBarColor="#B22222" style={styles.header}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())} style={styles.header} >
              <Icon name='menu' />
          </Button>
          </Left>
          <Body>
            <Title>Lookup GG</Title>
          </Body>
          <Right>
            <Button transparent light onPress={this.search} >
              <Icon type="FontAwesome" name="search" />
            </Button>
          </Right>
        </Header>
        <Tabs>
          <Tab heading={ <TabHeading style={styles.tabHeading}><Icon name="home" /><Text>Home</Text></TabHeading>}>
            <TabOne />
          </Tab>
          <Tab heading={ <TabHeading style={styles.tabHeading}><Icon name="game-controller-b" /><Text>Jogos</Text></TabHeading>}>
            <TabTwo />
          </Tab>
          <Tab heading={ <TabHeading style={styles.tabHeading}><Icon name="people" /><Text>Looks</Text></TabHeading>}>
            <TabThree />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  tabHeading: {
    backgroundColor: "#B22222",
  },
  header: { 
    backgroundColor: "#B22222",

  },
  container: {
    flex: 1,
  }
});

const mapStateToProps = (state) => {
  return{
    status:state.auth.status,
    uid:state.auth.uid
  };
};

const InicioConnect = connect(mapStateToProps, {  })(TelaInicial);
export default InicioConnect;