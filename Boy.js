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


import Girl from './Girl';

export default class Boy extends Component {

    //初始化
    constructor(props) {
        super(props);
        this.state = {
            word:''
        }
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>boy</Text>
                <Text style={styles.text}>
                    onPerss={()=>{
                        this.props.navigator.push({
                            component:Girl,
                            params:{
                                word:'一支玫瑰',
                                onCallBack:(word)=>{
                                    this.setState({
                                        word:word
                                    })

                                }
                            }
                        })

                }}送女孩一支玫瑰</Text>

                <Text style={styles.text}>{this.state.word}</Text>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'gray',
        justifyContent:'center'
    },
    text:{
        fontSize:20
    }
})
