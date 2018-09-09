import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store } from '~/data/store';
import MainActivity from '~/screens/Main/MainActivity';
import AddCityActivity from '~/screens/AddCity/AddCityActivity';
import { Router, Stack, Scene } from 'react-native-router-flux';

const AppRouter = () => (
  <Router>
    <Stack key="root">
      <Scene initial hideNavBar={true} key="main" component={MainActivity} />
      <Scene key="add_city" component={AddCityActivity} hideNavBar={true} />
    </Stack>
  </Router>
);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppRouter />
      </Provider>
    );
  }
}
