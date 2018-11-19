import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, TextInput, Input, InputGroup, Content, Item, Text, Title, Contente, List, ListItem } from 'native-base';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { pesquisarGame } from './actions/GruposActions';

import { DrawerActions, NavigationActions, StackActions } from 'react-navigation';

export class Search extends Component {

  constructor(props) {
    super(props);
    this.state = { };

  }

  render() {
    return (
      <Container>
        <Header searchBar rounded androidStatusBarColor="#B22222" style={styles.header} >
          <Item>
            <Icon name="ios-search"  />
            <Input value={this.props.pesquisa} onChangeText={(text) => this.setState({search:text})} />
            <Button title="Pesquisa"  onPress={()=>{ this.props.pesquisarGame(this.props.pesquisa) }} />
            <Icon name="game-controller-b" />
          </Item>
        </Header>
        <Content>
          <List dataArray={this.props.getgames}
            renderRow={(item) =>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{uri: item.capa}} style={{ height:73, width:60 }} />
              </Left>
              <Body>
                <Text>{item.name}</Text>
                <Text note numberOfLines={1}>{item.followersGame} usuário(s) seguindo</Text>
              </Body>
              <Right>
                <Button small >
                  <Text>Info</Text>
                </Button>
              </Right>
            </ListItem>
            }>
          </List>
        </Content>
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
  return {
    getgames:state.grupos.getgames

  };
};

const SearchConnect = connect(mapStateToProps, { pesquisarGame })(Search);
export default SearchConnect;