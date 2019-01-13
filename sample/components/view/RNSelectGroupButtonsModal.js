import React from "react";
import {
    TouchableOpacity,
    Text, KeyboardAvoidingView,
    View,
    Image,
    Platform,
    BackHandler, PanResponder,
    StyleSheet,
    StatusBar, Dimensions
} from "react-native";
import Modal from 'react-native-modal';

const {width} = Dimensions.get('window');

export default class RNSelectGroupButtonsModal extends React.Component {

    _watcher = null;
    _containerLayout;
    _settingBuild = {
        backdropColor: '#303437',
        backdropOpacity: 0.2,
        animationIn: 'slideInUp',
        animationTime: 500,//Default animation duration
        hideOnBack: true,
        modalTitle: '支付方式',
    };

    constructor(props) {
        super(props);
        this._settingBuild = props.settingBuild !== undefined && props.settingBuild
            && props.settingBuild !== null;//some static props
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

    componentWillMount() {
        this._watcher = PanResponder.create({
            onStartShouldSetPanResponder: this._handleStartShouldSetPanResponder,
            onPanResponderGrant: this._handlePanResponderGrant,
        });
    };

    render() {
        const settingData = this._settingBuild;
        let modalStyle = this.props.style ? this.props.style : styles.modal_root;//The default permutation is at the bottom
        const {onModalHide, onBackButtonPress, ...otherProps} = this.props;
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
                onBackButtonPress={onBackButtonPress}
                onModalHide={onModalHide}
                {...otherProps}
            >
                <View style={{
                    backgroundColor: '#00000000',
                    width: '100%',
                    justifyContent: 'flex-end',
                    flex: 1
                }} {...this._watcher.panHandlers}>
                    <KeyboardAvoidingView>
                        <View style={styles.modal_container_style} onLayout={(event) => {
                            this._containerLayout = event.nativeEvent.layout;
                        }}>
                            <Text>10085</Text>
                            {this.renderCloseButton()}
                        </View>
                    </KeyboardAvoidingView>
                </View>
            </Modal>
        )
    }

    //render close button to show or hide modal
    renderCloseButton = () => {
        let defaultIcon = require('../../assets/icon_delete.png');
        if (undefined !== this.props.defaultCloseIcon) {
            defaultIcon = this.props.defaultCloseIcon;
        }
        //use a larger touch area in case the button is too small
        return (
            <TouchableOpacity
                style={{width: 30, height: 30}}
                onPress={() => {
                    this.closeButtonPress()
                }}>
                <Image source={defaultIcon}/>
            </TouchableOpacity>
        )
    };

    closeButtonPress = () => {
        if (this.props.closeButtonPress) {
            this.setState({
                selectorVisible: false
            });
            this.props.closeButtonPress(false)
        }
    };

    _handlePanResponderGrant = (e, gestureState) => {
        const pageY = e.nativeEvent.changedTouches[0].pageY;

        const {y, height} = this._containerLayout;

        if (pageY < y - 10 || pageY > y + height) {
            this.closeButtonPress();
        }
    };

    _handleStartShouldSetPanResponder = (e, gestureState) => {
        return true;
    };

}

const styles = StyleSheet.create({
    modal_root: {
        marginHorizontal: 0,
        marginVertical: 0,
        justifyContent: 'flex-end',
    },
    modal_container_style: {
        backgroundColor: '#ffffff'
    }
});
