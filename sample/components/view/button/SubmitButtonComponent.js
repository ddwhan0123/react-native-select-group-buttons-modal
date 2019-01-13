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
        let bgColor = this.props.submitButtonBackgroundColor ? this.props.submitButtonBackgroundColor : '#00BCBC';
        if (!this.props.canSubmit) {
            bgColor = '#CDCED4'
        }
        return (
            <TouchableOpacity
                style={[styles.submitBtnContainer, bgColor]}
                onPress={() => {
                }}>
                <View>

                </View>
            </TouchableOpacity>
        )
    }

    //when button onPress
    submitClick = () => {
    };
}

const styles = StyleSheet.create({
    submitBtnContainer: {
        width: width * 13 / 15,
        marginLeft: width / 15,
        height: 45,
        borderRadius: width * 45 / 750,
        marginTop: width * 28 / 750,
        marginBottom: width * 30 / 750,
        borderWidth: 0,
    },
});
