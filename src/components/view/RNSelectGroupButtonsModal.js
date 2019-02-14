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
import SubmitButtonComponent from './button/SubmitButtonComponent';
import RNSelectGroupButtonsView from './RNSelectGroupButtonsView';

const {width, height} = Dimensions.get('window');

export default class RNSelectGroupButtonsModal extends React.Component {
    _watcher = null;
    _containerLayout;
    defaultMode = null;
    _settingBuild = {
        backdropColor: '#303437',
        backdropOpacity: 0.2,
        animationIn: 'slideInUp',
        animationTime: 500,//Default animation duration
        hideOnBack: true,
        modalTitle: '支付方式',
        modalTips: '点击下方按钮选择支付方式',
        closeWithOutSideClick: true,
    };

    constructor(props) {
        super(props);
        if (props.settingBuild !== undefined && props.settingBuild
            && props.settingBuild !== null) {
            //some static props
            this._settingBuild = props.settingBuild
        }
        this.defaultMode = this.props.defaultMode ?
            this.props.defaultMode : this.props.data[0];

        this.state = {
            selectorVisible: props.selectorVisible,//whether can show modal
            canSubmit: true,
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
        const data = this.props.data;
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
                            <View style={{
                                marginTop: 20,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}>
                                <View>
                                    {this.renderTitle(settingData)}
                                    {this.renderModalTips(settingData)}
                                </View>
                                {this.renderCloseButton()}
                            </View>
                            <RNSelectGroupButtonsView
                                onPaymentModeChanged={(item, index) => {
                                    if (item && this.props.onPaymentModeChanged) {
                                        this.props.onPaymentModeChanged(item, index);
                                    }
                                }}
                                data={data}
                                defaultMode={this.defaultMode}/>
                            <SubmitButtonComponent
                                submitText={'确认'}
                                canSubmit={this.state.canSubmit}
                                style={this.setSubmitButtonPadding()}
                                onClickSubmitButton={() => {
                                    this.onClickSubmitButton()
                                }}/>
                        </View>
                    </KeyboardAvoidingView>
                </View>
            </Modal>
        )
    }

    //you can set the distance from the bottom
    setSubmitButtonPadding = () => {
        let style = {marginBottom: 20};
        if (this.props.SubmitButtonStyle) {
            style = this.props.SubmitButtonStyle;
        }
        return style;
    };

    //if need not title,you can transmit ''
    renderTitle = (settingData) => {
        let titleColor = '#363C54';
        if (this.props.titleColor) {
            titleColor = this.props.titleColor;
        }
        if (settingData.modalTitle && settingData.modalTitle.length
            && settingData.modalTitle.length > 0) {
            return (
                <Text style={{color: titleColor, fontSize: 16}}>{settingData.modalTitle}</Text>
            )
        }
    };

    //if need not tips,you can transmit ''
    renderModalTips = (settingData) => {
        let tipsColor = '#9B9DA9';
        if (this.props.tipsColor) {
            tipsColor = this.props.tipsColor;
        }
        return (
            <Text style={{
                color: tipsColor,
                fontSize: 12,
                marginTop: 8, marginBottom: 8,
            }}>{settingData.modalTips}</Text>
        )
    };

    //render close button to show or hide modal
    renderCloseButton = () => {
        //you can hide the button after setting it up
        if (this.props.hideCloseButton && this.props.hideCloseButton === true) {
            return
        }
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

    //when the submitButton clicked
    onClickSubmitButton = () => {
        this.closeButtonPress()
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
        const modalHeight = this._containerLayout.height;
        //judging the area of contact
        if (pageY < (height - modalHeight)) {
            if (this.props.closeWithOutSideClick && this.props.closeWithOutSideClick === true) {
                this.closeButtonPress();
            } else {
                if (this._settingBuild && this._settingBuild.closeWithOutSideClick) {
                    this.closeButtonPress();
                }
            }
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
        backgroundColor: '#ffffff',
        paddingHorizontal: 25
    }
});
