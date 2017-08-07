/**
 * Created by wificityios on 2017/8/6.
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Image,
    Navigator,
    Text,
    View
} from 'react-native';



export default class Girl extends Component {

    //初始化
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render(){
        return(
           <View style={styles.container}>
                <Text style={styles.text}>Girl</Text>
                <Text style={styles.text}>{this.props.word}</Text>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'red',
        justifyContent:'center'
    },

    text:{
        fontSize:20
    }
})
