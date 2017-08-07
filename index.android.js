/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import TabNavigator from 'react-native-tab-navigetor';

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Image,
    Text,
    View
} from 'react-native';

export default class MyDemo extends Component {

    //设置默认显示home界面
    constructor(porops){
        super(porops);
        this.state={
            selectedTab:'home',
        }

    }

    render() {
        return (
            <View style={styles.container}>
              <TabNavigator>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'home'}
                    title="Home"
                    renderIcon={() => <Image source={require('./res/images/ic_polular.png')} />}
                    renderSelectedIcon={() => <Image source={require('./res/images/ic_polular.png')} />}
                    badgeText="1"
                    onPress={() => this.setState({ selectedTab: 'home' })}>
                  <View style={styles.page1}></View>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'profile'}
                    title="Profile"
                    renderIcon={() => <Image source={require('./res/images/ic_trending.png')} />}
                    renderSelectedIcon={() => <Image source={require('./res/images/ic_trending.png')} />}
                    onPress={() => this.setState({ selectedTab: 'profile' })}>
                  <View style={styles.page2}></View>
                </TabNavigator.Item>
              </TabNavigator>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: '#F5FCFF',
    },

    page1:{
        flex:1,
        backgroundColor:'red',
    },
    page2:{
        flex:1,
        backgroundColor:'yellow',
    }

});

AppRegistry.registerComponent('MyDemo', () => MyDemo);
