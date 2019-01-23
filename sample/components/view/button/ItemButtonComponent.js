import React from "react";
import {
    TouchableOpacity,
    Text,
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
        let {styles, data} = this.props;
        let creditIcon = this.props.selected ? require('../../../assets/icon_credit.png') :
            require('../../../assets/icon_black_credit.png');
        let cashSymbol = this.props.cashSymbol ? this.props.cashSymbol : '¥';
        let disableStyle = '#696D7F';
        styles = !this.props._disabled ? styles : {color: disableStyle};
        return (
            <View
                style={{paddingHorizontal: 10}}>
                {this.renderCash(data, styles, cashSymbol)}
                {this.renderCredit(data, creditIcon, styles)}
                {this.renderMix(data, creditIcon, styles, cashSymbol)}
            </View>
        )
    }

    renderCash = (data, styles, cashSymbol) => {
        if (data && data.mode === TYPE_CASH) {
            return (
                <View style={{flexDirection: 'row',}}>
                    <Text style={[styles]}>{cashSymbol} {data.cash}</Text>
                </View>
            )
        }
    };

    renderCredit = (data, creditIcon, styles) => {
        if (data && data.mode === TYPE_CREDIT) {
            return (
                <View style={{flexDirection: 'row',}}>
                    <Image source={creditIcon}
                           style={{
                               marginRight: SCALE_DIMENSION_SIZE(10),
                               alignSelf: 'center'
                           }}/>
                    <Text style={[styles]}>{data.credit}</Text>
                </View>
            )
        }
    };

    renderMix = (data, creditIcon, styles, cashSymbol) => {
        if (data && data.mode === TYPE_MIX) {
            return (
                <View style={{flexDirection: 'row',}}>
                    <Image source={creditIcon}
                           style={{
                               marginRight: SCALE_DIMENSION_SIZE(10),
                               alignSelf: 'center'
                           }}/>
                    <Text style={[styles]}>{data.credit} + {cashSymbol} {data.cash}</Text>
                </View>
            )
        }
    };

    renderCustom = (data, creditIcon, styles) => {
        if (data && data.mode === TYPE_CUSTOM) {
            return (
                <View style={{flexDirection: 'row',}}>

                </View>
            )
        }
    };


}