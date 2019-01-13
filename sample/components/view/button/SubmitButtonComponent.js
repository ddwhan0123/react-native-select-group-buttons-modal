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

const {width} = Dimensions.get('window');

export default class SubmitButtonComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let text = this.props.submitText ? this.props.submitText : '确认';
        let bgColor = this.props.submitButtonBackgroundColor ? this.props.submitButtonBackgroundColor : '#00BCBC';
        if (this.props.canSubmit === false) {
            bgColor = '#CDCED4'
        }
        const {style} = this.props;
        return (
            <TouchableOpacity
                style={[styles.submitBtnContainer, {backgroundColor: bgColor},style]}
                onPress={() => {
                    if (this.props.onClickSubmitButton && this.props.canSubmit === true) {
                        this.props.onClickSubmitButton()
                    }
                }}>
                <Text style={{color: '#ffffff', fontSize: 16}}>{text}</Text>
            </TouchableOpacity>
        )
    }

    //when button onPress
    submitClick = () => {
    };
}

const styles = StyleSheet.create({
    submitBtnContainer: {
        height: 45,
        borderRadius: width * 45 / 750,
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
});
