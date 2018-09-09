import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import iconWeatherSource from '~/assets/images/weather';
import { Icon } from 'native-base';

export default class ItemForecast5DayComponents extends Component {
  render() {
    return (
      <View
        style={{
          marginLeft: 15,
          marginRight: 15,
          marginTop: 5,
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}
      >
        <View
          style={{
            flex: 1,
            padding: 5,
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Image source={iconWeatherSource[this.props.data.icon]} />
          <View style={{ flexDirection: 'column', alignContent: 'center' }}>
            <Text style={{ marginLeft: 15 }}>{this.props.data.date.substring(0, 10)}</Text>
            <Text style={{ marginLeft: 15 }}>{this.props.data.text}</Text>
          </View>
        </View>

        <View style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'row' }}>
          <View style={{ padding: 5, flexDirection: 'row', alignItems: 'center' }}>
            <Icon type="MaterialIcons" name="expand-less" style={{ color: 'red' }} />
            <Text style={{ marginLeft: 5 }}>{this.props.data.tempMin} ℃</Text>
          </View>

          <View style={{ padding: 5, flexDirection: 'row', alignItems: 'center' }}>
            <Icon type="MaterialIcons" name="expand-more" style={{ color: 'red' }} />
            <Text style={{ marginLeft: 5 }}>{this.props.data.tempMax} ℃</Text>
          </View>
        </View>
      </View>
    );
  }
}
