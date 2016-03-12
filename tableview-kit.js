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
    constructor(){
        super();
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
    }
    render(){
        return (
            <TouchableHighlight onPress={() => this._pressRow(rowData)} >
                <View style={this.cellStyles}>
                    <View>
                    <Text>
                        {this.props.title}
                    </Text>
                    </View>
                    <Text style={{marginRight:15,color:'#cccccc'}}>
                    &gt;
                    </Text>
                </View>
            </TouchableHighlight>
        )
    }
}

export { RightDetailCell };
