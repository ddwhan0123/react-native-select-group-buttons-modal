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

    _selectedRef = null;
    _selectedMode = null;

    constructor(props) {
        super(props);
        this._selectedMode = props.defaultMode;
        this.state = {data: props.data,};
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

                {this.state.data && this.state.data.map(((item, index) => {
                    return (
                        <RNSelectItemButton
                            ref={(ref) => {
                                if (item.mode === this._selectedMode.mode) {
                                    this._selectedRef = ref;
                                }
                            }}
                            onPress={(button) => {
                                if (this._selectedRef && this._selectedRef !== button) {
                                    this._selectedRef.changeSelectedState(false);
                                }
                                this._selectedMode = item;
                                this._selectedRef = button;
                                if (this.props.onPaymentModeChanged) {
                                    this.props.onPaymentModeChanged(item, index);
                                }
                            }}
                            selected={this._selectedMode.mode === item.mode}
                            itemData={item}
                            key={'key' + index + item.mode}/>
                    )
                }))}
            </View>
        )
    }
}