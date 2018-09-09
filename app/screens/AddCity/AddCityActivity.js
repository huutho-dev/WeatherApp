import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  Container, Header, Left, Button, Icon, Body, Title, Content,
} from 'native-base';

import {
  TextInput, FlatList, TouchableOpacity, Text,
} from 'react-native';

import { Actions } from 'react-native-router-flux';

const fakeCity = [{ name: 'Ha noi' }, { name: 'Da nang' }, { name: 'Tp.HCM' }];

const mapStateToProps = (state) => {
  console.log(`AddCityActivity => state => ${JSON.stringify(state)}`);
  return {};
};
const mapDispatchToProps = {};
@connect(
  mapStateToProps,
  mapDispatchToProps,
)
export default class AddCityActivity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      listCity: fakeCity,
    };
  }

  render() {
    return (
      <Container>
        {this.renderHeader()}
        {this.renderContent()}
      </Container>
    );
  }

  renderHeader() {
    return (
      <Header androidStatusBarColor="red" style={{ backgroundColor: 'transparent' }}>
        <Left>
          <Button
            onPress={() => {
              Actions.pop();
            }}
            transparent
          >
            <Icon type="MaterialIcons" style={{ color: 'black' }} name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title style={{ color: 'red' }}>Add City</Title>
        </Body>
      </Header>
    );
  }

  renderContent() {
    return (
      <Content>
        <TextInput
          style={{
            paddingLeft: 20,
            borderRadius: 20,
            marginTop: 10,
            marginLeft: 10,
            marginRight: 10,
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
          }}
          placeholder="Enter city name"
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />

        <FlatList
          style={{ marginTop: 20 }}
          keyExtractor={item => item.name}
          data={this.state.listCity}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <Text
                style={{
                  marginLeft: 10,
                  marginRight: 10,
                  marginTop: 10,
                  color: 'red',
                  fontSize: 22,
                }}
              >
                {' '}
                {item.name}{' '}
              </Text>
            </TouchableOpacity>
          )}
        />
      </Content>
    );
  }
}
