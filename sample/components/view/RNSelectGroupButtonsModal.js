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
        animationIn: 'slideInUp',
        animationTime: 500,//Default animation duration
        hideOnBack: true,
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
        let modalStyle = this.props.style ? this.props.style : styles.modal_root;//The default permutation is at the bottom
        const {...otherProps} = this.props;
        return (
            <Modal
                isVisible={this.state.selectorVisible}
                backdropColor={settingData.backdropColor}
                backdropOpacity={settingData.backdropOpacity}
                style={[modalStyle, styles.modal_root]}
                animationIn={settingData.animationIn}
                animationInTiming={settingData.animationTime}
                animationOutTiming={settingData.animationTime}
                backdropTransitionInTiming={settingData.animationTime}
                backdropTransitionOutTiming={settingData.animationTime}
                hideOnBack={settingData.hideOnBack}
                {...otherProps}
            >

            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    modal_root: {
        marginHorizontal: 0,
        marginVertical: 0,
        justifyContent: 'flex-end',
    }
});
