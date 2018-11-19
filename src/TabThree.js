import React, { Component } from 'react';
import { Container, Header, View, Title, Content, List, ListItem, Thumbnail, Fab, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { getFollowsList } from './actions/GruposActions';

export class TabThree extends Component {

  constructor(props) {
    super(props);
    this.state = { };

    this.props.getFollowsList();

  }

  render() {
    return (
      <Container>
        <Content>
          <List dataArray={this.props.follows}
            renderRow={(item) =>
            <ListItem thumbnail>
              <Left>
                <Thumbnail source={{uri: item.avatar}} />
              </Left>
              <Body>
                <Text>{item.name}</Text>
                <Text note numberOfLines={1}>Amigos desde 20/05/2018 </Text>
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
    follows:state.grupos.follows
  };
};

const TabThreeConnect = connect(mapStateToProps, { getFollowsList })(TabThree);
export default TabThreeConnect;
