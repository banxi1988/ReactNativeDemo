
'use strict';
import React, {
  AppRegistry,
  Component,
  Navigator,
  TouchableOpacity,
  StyleSheet,
  ListView,
  ScrollView,
  TouchableHighlight,
  Image,
  Text,
  View
} from 'react-native';

import {RightDetailCell} from './tableview-kit'

class SettingsController extends Component {
  constructor(){
      super();
  }
  render() {
    return (
    <View style={{marginTop:64}}>
      <ScrollView style={{}}>
          <RightDetailCell title="设置项1"/>
          <RightDetailCell title="设置项2" detail="点击查看详情"/>
      </ScrollView>
      </View>
    );
  }
}

AppRegistry.registerComponent('Settings', () => SettingsController);

