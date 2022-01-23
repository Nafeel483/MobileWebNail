import React, { Component } from 'react';
import { View, LogBox } from 'react-native';
import RootNavigation from './Navigation/RootNavigation';
import * as NavigationService from './Components/Services/NavigationService';

LogBox.ignoreAllLogs()

class Root extends Component {
  componentDidMount() {
    NavigationService.setNavigator(this.navigator);
  }
  render() {
    return (
      <>
        <View style={{ flex: 1 }}>
          <RootNavigation
            ref={nav => {
              this.navigator = nav;
            }}
          />
        </View>
      </>
    );
  }
}
export default Root;
