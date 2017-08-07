/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
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

import TabNavigator from 'react-native-tab-navigator';
import Boy from './Boy'

export default class MyDemo extends Component {

    //设置默认显示home界面
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'tb_popular',
        }

    }

    render() {
        return (
            <View style={styles.container}>
              { /* <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'tb_popular'}
                        selectedTitleStyle={{color:'red'}}
                        title="首页"
                        renderIcon={() => <Image style={styles.image} source={require('./res/images/ic_polular.png')}/>}
                        renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'red'}]} source={require('./res/images/ic_polular.png')}/>}
                        badgeText="12"
                        onPress={() => this.setState({selectedTab: 'tb_popular'})}>
                        <View style={styles.page1}></View>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'tb_trending'}
                        selectedTitleStyle={{color:'yellow'}}
                        title="社区"
                        renderIcon={() => <Image style={styles.image} source={require('./res/images/ic_trending.png')}/>}
                        renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'yellow'}]} source={require('./res/images/ic_trending.png')}/>}
                        onPress={() => this.setState({selectedTab: 'tb_trending'})}>
                        <View style={styles.page2}></View>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'tb_favorite'}
                        selectedTitleStyle={{color:'red'}}
                        title="个人中心"
                        renderIcon={() => <Image style={styles.image} source={require('./res/images/ic_polular.png')}/>}
                        renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'red'}]} source={require('./res/images/ic_polular.png')}/>}
                        badgeText="12"
                        onPress={() => this.setState({selectedTab: 'tb_favorite'})}>
                        <View style={styles.page1}></View>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'tb_my'}
                        selectedTitleStyle={{color:'yellow'}}
                        title="登入"
                        renderIcon={() => <Image style={styles.image} source={require('./res/images/ic_trending.png')}/>}
                        renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'yellow'}]} source={require('./res/images/ic_trending.png')}/>}
                        onPress={() => this.setState({selectedTab: 'tb_my'})}>
                        <View style={styles.page2}></View>
                    </TabNavigator.Item>

                </TabNavigator>*/}

              {  <Navigator>
                    initialRoute={{
                    component:Boy
                }}
                    renderScene={(route,navigator)=>{
                        let Component=route.component;
                        return <Component navigator={navigator}{...route.params}/>

                }}

                </Navigator>}

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },

    page1: {
        flex: 1,
        backgroundColor: 'red',
    },
    page2: {
        flex: 1,
        backgroundColor: 'yellow',
    },
    image:{
        height:22,
        width:22,

    }


});

AppRegistry.registerComponent('MyDemo', () => MyDemo);
