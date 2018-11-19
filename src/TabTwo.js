import React, { Component } from 'react';
import { Container, Header, View, Title, Content, List, ListItem, Thumbnail, Fab, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { getMyGamesList } from './actions/GruposActions';

export class TabTwo extends Component {

  constructor(props) {
    super(props);
    this.state = { };

    this.props.getMyGamesList();

  }

  render() {
    return (
      <Container>
        <Content>
          <List dataArray={this.props.mygames}
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
                  <Text>Unlook</Text>
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

const mapStateToProps = (state) => {
  return{
    mygames:state.grupos.mygames
  };
};

const TabTwoConnect = connect(mapStateToProps, { getMyGamesList })(TabTwo);
export default TabTwoConnect;
