import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import iconWeatherSource from '~/assets/images/weather';

export default class ItemForecastEveryDayComponents extends Component {
  render() {
    return (
      <View
        style={{
          marginLeft: 15,
          marginRight: 15,
          marginTop: 5,
          justifyContent: 'center',
          flexDirection: 'column',
          alignContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ marginLeft: 15 }}>{this.props.data.text}</Text>
        <Image source={iconWeatherSource[this.props.data.icon]} />
        <Text style={{ marginLeft: 15 }}>{this.props.data.date.substring(11, 16)}</Text>
      </View>
    );
  }
}
