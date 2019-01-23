import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-navigation';//not necessary,just use for sample
import {getDataMode, TYPE_CASH, TYPE_CREDIT, TYPE_MIX} from './components/view/DataMode';
import RNSelectGroupButtonsModal from './components/view/RNSelectGroupButtonsModal';
import RNSelectGroupButtonsView from "./components/view/RNSelectGroupButtonsView";

export default class App extends React.Component {

    _settingBuild = {
        backdropColor: '#303437',
        backdropOpacity: 0.2,
        animationIn: 'slideInUp',
        animationTime: 400,//Default animation duration
        hideOnBack: true,
        modalTitle: '支付方式',
        modalTips: '业务控制文字内容',
        closeWithOutSideClick: true,//Click on the grey area to close the bullet window
    };

    constructor(props) {
        super(props);
        this.state = {
            selectorVisible: false
        };
    }

    initData = () => {
        let data = [];
        data[0] = getDataMode(false, TYPE_CREDIT, 600);
        data[1] = getDataMode(false, TYPE_CASH, 0, 500);
        data[2] = getDataMode(false, TYPE_MIX, 100, 200);
        data[3] = getDataMode(true, TYPE_MIX, 300, 400);
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
                    settingBuild={this._settingBuild}
                    onPaymentModeChanged={(item, index) => {
                        console.log(item);
                    }}
                    data={this.initData()}
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
