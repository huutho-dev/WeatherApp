import React, { Component } from 'react';

import {
  Container, Header, Left, Button, Icon, Body, Content, View,
} from 'native-base';

import { FlatList, TouchableOpacity, Text } from 'react-native';

import { Actions } from 'react-native-router-flux';

const fakeCity = [
  { name: 'Ha noi', icon: 'room', color: 'red' },
  { name: 'Da nang', icon: 'star', color: 'gray' },
  { name: 'Tp.HCM', icon: 'star', color: 'gray' },
];

export default class SideBar extends Component {
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
              this.props.closeDrawer(); // pass from MainActivity
            }}
            transparent
          >
            <Icon type="MaterialIcons" style={{ color: 'black' }} name="close" />
          </Button>
        </Left>
        <Body />
      </Header>
    );
  }

  renderContent() {
    return (
      <Content>
        <Text
          style={{
            alignSelf: 'center',
            color: 'red',
            fontStyle: 'italic',
            fontSize: 36,
          }}
        >
          Weather
        </Text>

        <FlatList
          style={{ marginTop: 20 }}
          keyExtractor={item => item.name}
          data={this.state.listCity}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <View
                style={{
                  height: 40,
                  marginLeft: 10,
                  alignItems: 'baseline',
                  alignContent: 'center',
                  flexDirection: 'row',
                }}
              >
                <Icon
                  style={{
                    fontSize: 22,
                    color: `${item.color}`,
                  }}
                  type="MaterialIcons"
                  name={item.icon}
                />

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
              </View>
            </TouchableOpacity>
          )}
        />

        <Button
          onPress={() => {
            Actions.add_city('');
          }}
          style={{
            alignContent: 'center',
            justifyContent: 'center',
            marginTop: 30,
            alignSelf: 'center',
            height: 40,
            width: 200,
          }}
          bordered
          danger
        >
          <View
            style={{
              alignSelf: 'center',
              flexDirection: 'row',
              alignItems: 'center',
              alignContent: 'center',
              justifyContent: 'center',
            }}
          >
            <Icon
              type="MaterialIcons"
              style={{ marginRight: 10, fontSize: 22, color: 'red' }}
              name="control-point"
            />
            <Text style={{ color: 'red', fontSize: 20 }}>Add City</Text>
          </View>
        </Button>
      </Content>
    );
  }
}
