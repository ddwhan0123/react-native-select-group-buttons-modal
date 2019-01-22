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

const {width, height} = Dimensions.get('window');

export default class ItemButtonComponent extends React.PureComponent {
    constructor(props) {
        super(props)
    }

    render() {
        const {style,data} = this.props;
        return (
            <View>
                <Text style={{color: style}}>123</Text>
            </View>
        )
    }

    renderCash = (data) => {
    };
    renderCredit = (data) => {
    };
    renderMix = (data) => {
    };
    renderCustom = (data) => {
    };
}