import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-navigation';//not necessary,just use for sample
import getDataMode, {TYPE_CREDIT} from './components/view/DataMode';
import RNSelectGroupButtonsModal from './components/view/RNSelectGroupButtonsModal';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectorVisible: false
        };
    }


    initData = () => {
        let data = [];
        data[0] = getDataMode(true, TYPE_CREDIT, 100);
        return data;
    };

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text>Open up App.js to start working on your app!</Text>
                <TouchableOpacity onPress={() => {
                    this.setState({
                        selectorVisible: !this.state.selectorVisible
                    })
                }}>
                    <Text>press show modal</Text>
                </TouchableOpacity>
                <RNSelectGroupButtonsModal
                    closeButtonPress={(flag) => {
                        this.setState({
                            selectorVisible: flag
                        })
                    }}
                    selectorVisible={this.state.selectorVisible}/>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
