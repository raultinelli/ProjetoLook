import React, { Component } from 'react';
import { Container, Header, View, Title, Content,List, Card, CardItem, Thumbnail, Image, Fab, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { getConnectList } from './actions/GruposActions';

export class TabOne extends Component {

  constructor(props) {
    super(props);
    this.state = {
      active: 'true'
    };
    this.props.getConnectList();
    this.criarConexao = this.criarConexao.bind(this);

  }

  criarConexao() {
    
  }

  render() {
    return (
      <Container>
        <Content>
          <List dataArray={this.props.connect}
            renderRow={(item) =>
            <Card style={{flex: 7}}>
              <CardItem>
                <Left>
                  <Thumbnail square source={{uri: item.capa }} style={{ height:80, width:60 }} />
                  <Body>
                    <Text>{item.name}</Text>
                    <Text note>{item.date_create}</Text>
                  </Body>
                </Left>
                <Right>
                  <Button small >
                  <Text>Conectar</Text>
                </Button>
                </Right>
              </CardItem>
              <CardItem>
                <Text>{item.description}</Text>
              </CardItem>
              <CardItem>
                <Left>
                  <Icon active name="contact" />
                  <Text>Procurando {item.connectCount} / {item.max_users} jogadores</Text>
                </Left>
              </CardItem>
            </Card>
            }>
          </List>
        </Content>
        <View>
            <Fab
              active={!this.state.active}
              direction="up"
              containerStyle={{ }}
              style={{ backgroundColor: '#DD5144' }}
              position="bottomRight"
              onPress={() => this.setState({ active: !this.state.active })}>
              <Icon name="add" />
              <Button style={{ backgroundColor: '#34A34F' }} onPress={this.criarConexao} >
                <Icon name="chatboxes" />
              </Button>
              <Button disabled style={{ backgroundColor: '#5067FF' }}>
                <Icon name="people" />
              </Button>
            </Fab>
          </View>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    connect:state.grupos.connect
  };
};

const HomeConnect = connect(mapStateToProps, { getConnectList })(TabOne);
export default HomeConnect;