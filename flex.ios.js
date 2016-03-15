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


class FlexLayoutController extends Component {
  constructor(){
      super();
      this.boxStyle = {
          width:100,
          height:100,
          alignItems:'center',
          justifyContent:'center',
          backgroundColor:'#fff',
      };
  }
  render() {
    return (
    <View style={{marginTop:64,flexDirection:'row', backgroundColor:'#000'}}>
        <View style={this.boxStyle}>
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('Flex', () => FlexLayoutController);

