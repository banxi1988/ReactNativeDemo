/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  NativeModules,
  Component,
  Navigator,
  TouchableOpacity,
  StyleSheet,
  ListView,
  TouchableHighlight,
  Image,
  Text,
  View
} from 'react-native';

import {RightDetailCell} from './tableview-kit';


class NavButton extends Component{
    render(){
        return (
            <TouchableHighlight onPress={this.props.onPress} style={dl_styles.row}
            underlayColor = "#B5B5B5"
            >
            <Text >{this.props.text}</Text>
            </TouchableHighlight>
        )
    }
}

let NavigationBarRouteMapper = {
    LeftButton: function(route,navigator,index, navState){
        if(index == 0){
            return null;
        }
        var prevRoute = navState.routeStack[index - 1];
        return (
            <TouchableOpacity onPress={() => navigator.pop()}>
                <Text>
                {prevRoute.title}
                </Text>
            </TouchableOpacity>
        )
    },

    RightButton: function(route,navigator,index, navState){
        return null;
        return (
            <TouchableOpacity onPress={() => navigator.push({title:'Right',name:'right-comp'})}>
                <Text>
                Next
                </Text>
            </TouchableOpacity>
        )
    },
    Title: function(route,navigator,index, navState){
        return (
            <Text>
            {route.title} [{index}]
            </Text>
        )
    }
}

class ReactNativeDemoListRoot extends Component{
    constructor(){
        super();
    }

    componentWillMount(){
        var navigator = this.props.navigator;
    }

    render(){
        return (
        <Navigator
        initialRoute ={{title:'Demo 展示列表',name:"demoList"}}
        renderScene ={ (route,navigator) => (
            <ReactNativeDemoList title={route.title} name={route.name}/>
        )}

        />
        );
    }
}

class ReactNativeDemoList extends Component{

    constructor(){
        super();
        var ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(this._genRows()),
        };
    }
    _genRows(){
        return [
            {title:'Flex 布局示例', id: 'flex'},
            {title:'自定义原生 Component示例', id:'native-component'},
            {title:'封装原生API示例', id:'native-module'},
        ]
    }

    render(){
        return (
        <ListView
            style={{backgroundColor:'#fff',marginTop:64, borderTopWidth:0.5,borderColor:'#ccc'}}
            dataSource = { this.state.dataSource}
            renderRow = {this._renderRow}
        />
        )
    }

    _renderRow(rowData){
        return (
            <RightDetailCell title={rowData.title}  onPress={() => NativeModules.ReactComponentPresenter.pushComponent(rowData.id,rowData.title)}/>
        )
    }

    _pressRow(rowData){
        NativeModules.ReactComponentPresenter.pushComponent(rowData.id,rowData.title);
    }
}

var dl_styles = StyleSheet.create({
    row:{
        flexDirection:'row',
        flexWrap:'nowrap',
        alignItems:'center',
        justifyContent:'space-between',
        height:44,
        marginLeft:15,
        borderBottomWidth:1,
        borderColor:'#ccc'
    }
});



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  thumbnail:{
      width:53,
      height:81
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ReactNativeDemoList', () => ReactNativeDemoList);
AppRegistry.registerComponent('ReactNativeDemoListRoot', () => ReactNativeDemoListRoot);
