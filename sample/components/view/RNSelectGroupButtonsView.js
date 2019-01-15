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
import RNSelectItemButton from './button/RNSelectItemButton';
import {SCALE_DIMENSION_SIZE} from "../common/styles";

const {width, height} = Dimensions.get('window');

export default class RNSelectGroupButtonsView extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps) {
    }

    componentWillMount() {
    }

    render() {
        return (
            <View style={{
                flexDirection: 'row',
                marginHorizontal: -SCALE_DIMENSION_SIZE(8),
                marginVertical: 10,
                flexWrap: 'wrap'
            }}>
                <RNSelectItemButton/>
                <RNSelectItemButton/>
                <RNSelectItemButton/>
            </View>
        )
    }

}