'use strict';
import React, {
  Component,
  TouchableOpacity,
  StyleSheet,
  ListView,
  TouchableHighlight,
  Image,
  Text,
  View
} from 'react-native';

class RightDetailCell extends Component{
    constructor(props){
        super();
        this.props = props
        console.log("this.props.onPress",this.props.onPress);
        this.cellStyles = {
            flexDirection:'row',
            flexWrap:'nowrap',
            alignItems:'center',
            justifyContent:'space-between',
            height:44,
            marginLeft:15,
            borderBottomWidth:1,
            borderColor:'#ccc'
        };
        this.titleStyle = { };
        this.detailStyle = { color:'#999999',fontSize:13,textAlign:'right' };
    }
    render(){
        return (
            <TouchableHighlight onPress={this.props.onPress} >
                <View style={this.cellStyles}>
                    <View style={{flex:1}}>
                    <Text>
                        {this.props.title}
                    </Text>
                    </View>
                    <View>
                    <Text style={this.detailStyle}>
                        {this.props.detail}
                    </Text>
                    </View>
                    <Text style={{marginLeft:8,marginRight:15,color:'#cccccc'}}>
                    &gt;
                    </Text>
                </View>
            </TouchableHighlight>
        )
    }
}

export { RightDetailCell };
