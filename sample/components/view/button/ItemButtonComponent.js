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
import {TYPE_CASH, TYPE_CREDIT, TYPE_CUSTOM, TYPE_MIX} from "../DataMode";
import {SCALE_DIMENSION_SIZE} from "../../common/styles";

const {width, height} = Dimensions.get('window');

export default class ItemButtonComponent extends React.PureComponent {
    constructor(props) {
        super(props)
    }

    render() {
        const {style, data} = this.props;
        const creditIcon = require('../../../assets/icon_credit.png');
        return (
            <View>
                <Text style={{color: style}}>123</Text>
                {this.renderCash()}
                {this.renderCredit(data, creditIcon)}
                {this.renderMix(data, creditIcon)}
            </View>
        )
    }

    renderCash = (data,) => {
        if (data && data.mode === TYPE_CASH) {
            return (
                <View style={{flexDirection: 'row',}}>
                    <Text>{data.cash}</Text>
                </View>
            )
        }
    };

    renderCredit = (data, creditIcon) => {
        if (data && data.mode === TYPE_CREDIT) {
            return (
                <View style={{flexDirection: 'row',}}>
                    <Image source={creditIcon}
                           style={{
                               marginRight: SCALE_DIMENSION_SIZE(10),
                               alignSelf: 'center'
                           }}/>
                </View>
            )
        }
    };

    renderMix = (data, creditIcon) => {
        if (data && data.mode === TYPE_MIX) {
            return (
                <View style={{flexDirection: 'row',}}>
                    <Image source={creditIcon}
                           style={{
                               marginRight: SCALE_DIMENSION_SIZE(10),
                               alignSelf: 'center'
                           }}/>
                </View>
            )
        }
    };

    renderCustom = (data, creditIcon) => {
        if (data && data.mode === TYPE_CUSTOM) {
            return (
                <View style={{flexDirection: 'row',}}>

                </View>
            )
        }
    };


}