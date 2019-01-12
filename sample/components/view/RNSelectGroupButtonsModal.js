import React from "react";
import {
    TouchableOpacity,
    Text,
    View,
    Image,
    Platform,
    BackHandler,
    StyleSheet,
    StatusBar, Dimensions
} from "react-native";
import Modal from 'react-native-modal';

export default class RNSelectGroupButtonsModal extends React.Component {

    _settingBuild = {
        backdropColor: '#303437',
        backdropOpacity: 0.2,
    };

    constructor(props) {
        super(props);
        this._settingBuild = props.settingBuild;//some static props
        this.state = {
            selectorVisible: props.selectorVisible,//whether can show modal
        }
    }

    componentWillReceiveProps(nextProps) {
        //if the visible props changed
        if (this.props.selectorVisible !== nextProps.selectorVisible) {
            this.setState({
                selectorVisible: nextProps.selectorVisible
            })
        }
    }

    render() {
        const settingData = this._settingBuild;
        return (
            <Modal
                isVisible={this.state.selectorVisible}
                backdropColor={settingData.backdropColor}
                backdropOpacity={settingData.backdropOpacity}
            >

            </Modal>
        )
    }
}


