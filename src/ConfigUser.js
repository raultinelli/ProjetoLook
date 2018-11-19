import React, { Component } from 'react';
import { Container, Header, View, Title, Content, Fab, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { StyleSheet } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { deslogar } from './actions/AuthActions';


export class ConfigUser extends Component {

  constructor(props) {
    super(props);
    this.state = {};

    this.sair = this.sair.bind(this);
  }

  sair() {
    this.props.deslogar();

    const resetAction = StackActions.reset({
      index:0,
      actions:[
        NavigationActions.navigate({routeName:'Home'})
      ]
    });

    this.props.navigation.dispatch(resetAction);
  }

  render() {
    return (
      <Container>
        <Header androidStatusBarColor="#B22222" style={styles.header} >
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Configuração</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Text> Configuração </Text>
        </Content>
            <Button block danger onPress={this.sair}><Text> Sair do App </Text></Button>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#B22222"
  },

});

const mapStateToProps = (state) => {
  return{
    status:state.auth.status,
    uid:state.auth.uid
  };
};

const ConfigUserConnect = connect(mapStateToProps, { deslogar })(ConfigUser);
export default ConfigUserConnect;