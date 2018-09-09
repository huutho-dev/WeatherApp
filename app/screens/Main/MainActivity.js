import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import SideBar from '~/screens/Main/SideBar';
import weatherIconSource from '~/assets/images/weather';
import ItemForecast5DayComponents from '~/screens/Main/ItemForecast5DayComponent';
import { getWeatherData, setLoading } from '~/domain/actions/main/index';

import { ScrollView, RefreshControl, View, Image, FlatList } from 'react-native';

import {
  Drawer,
  Container,
  Header,
  Left,
  Body,
  Button,
  Icon,
  Title,
  Right,
  Text,
  Content,
} from 'native-base';
import ItemForecastEveryDayComponents from '~/screens/Main/ItemForecastEveryDayComponent';

const mapStateToProps = (state) => {
  console.log(`MainActivity => state => ${JSON.stringify(state)}`);
  return {
    currentWeather: state.mainReducer.currentWeather,
    forecast5day: state.mainReducer.forecast5day,
    forecastByHours: state.mainReducer.forecastByHours,
    isLoading: state.mainReducer.isLoading,
  };
};
const mapDispatchToProps = {
  getWeatherData,
  setLoading,
};
@connect(
  mapStateToProps,
  mapDispatchToProps,
)
export default class MainActivity extends Component {
  constructor(props) {
    super(props);
    this.openDrawer = this.openDrawer.bind(this);
  }

  closeDrawer = () => {
    this.drawer._root.close();
  };

  openDrawer = () => {
    this.drawer._root.open();
  };

  render() {
    return (
      <Drawer
        ref={(ref) => {
          this.drawer = ref;
        }}
        negotiatePan={true}
        panOpenMask={0.25}
        content={<SideBar closeDrawer={this.closeDrawer.bind(this)} navigator={this.navigator} />}
        onClose={() => this.closeDrawer()}
      >
        {this.renderMainView()}
      </Drawer>
    );
  }

  renderMainView() {
    return (
      <Container>
        {this.renderToolbar()}
        {this.renderContentScreen()}
      </Container>
    );
  }

  renderToolbar() {
    return (
      <Header style={{ backgroundColor: 'transparent' }}>
        <Left>
          <Button onPress={this.openDrawer} transparent>
            <Icon style={{ color: 'red' }} name="menu" />
          </Button>
        </Left>
        <Body>
          <Title style={{ color: 'gray' }}>Header</Title>
        </Body>
        <Right>
          <Button
            onPress={() => {
              Actions.add_city('Add city');
            }}
            transparent
          >
            <Icon style={{ color: 'red' }} name="add" />
          </Button>
        </Right>
      </Header>
    );
  }

  renderRefreshControl() {
    return (
      <RefreshControl
				refreshing={this.props.isLoading}
				title = "Loading"
        onRefresh={() => {
          this.props.setLoading(true);
          this.props.getWeatherData('1-353412_1_AL');
        }}
      />
    );
  }

  renderContentScreen() {
    return (
      <Content>
        <ScrollView refreshControl={this.renderRefreshControl()}>
          <View style={{ flex: 1, flexDirection: 'column' }}>
            <View
              style={{
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'center',
              }}
            >
              <Text style={{ fontSize: 16, color: 'red' }}>℃</Text>
              <Text style={{ fontSize: 16, marginLeft: 20, marginRight: 20 }}>|</Text>
              <Text style={{ fontSize: 16 }}>℉</Text>
            </View>

            <Text style={{ marginTop: 5, fontSize: 22, alignSelf: 'center' }}>Hà nội City</Text>

            <Text
              style={{
                color: 'red',
                fontSize: 56,
                marginTop: 10,
                alignSelf: 'center',
              }}
            >
              {' '}
              {this.props.currentWeather.temp.c}
            </Text>

            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                  style={{ width: 30, height: 30 }}
                  source={weatherIconSource[this.props.currentWeather.icon]}
                />
                <Text>{this.props.currentWeather.text}</Text>
              </View>

              <View
                style={{
                  marginLeft: 30,
                  marginRight: 30,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <Icon type="MaterialIcons" name="expand-more" style={{ color: 'red' }} />
                <Text>{this.props.currentWeather.tempMax.c}</Text>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon type="MaterialIcons" name="expand-less" style={{ color: 'red' }} />
                <Text>{this.props.currentWeather.tempMin.c}</Text>
              </View>
						</View>

						<FlatList
					
							horizontal = {true}
              data={this.props.forecastByHours}
              style={{ marginTop: 20 }}
              renderItem={({ item }) => <ItemForecastEveryDayComponents data={item} />}
            />
					
						<FlatList
						scrollEnabled = {false}
              data={this.props.forecast5day}
              style={{ marginTop: 20 }}
              renderItem={({ item }) => <ItemForecast5DayComponents data={item} />}
            />
          </View>
        </ScrollView>
      </Content>
    );
  }
}
