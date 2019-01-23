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
import {SCALE_DIMENSION_SIZE} from "../../common/styles";

const {width, height} = Dimensions.get('window');
import ItemButtonComponent from './ItemButtonComponent';

export default class RNSelectItemButton extends React.Component {

    _selected = false;//Default is not selected

    constructor(props) {
        super(props);
        this._selected = this.props.selected;
        this._disabled = this.props.disabled;

        this.state = {
            selected: this._selected,
            disabled: this._disabled,
            data: props.itemData
        };
    }

    componentWillReceiveProps(nextProps) {
        //when the _selected changed,Buttons UI will refresh
        if (this._selected !== nextProps.selected) {
            this._selected = nextProps.selected;
            this.setState({
                selected: this._selected,
            });
        }

        if (this._disabled !== nextProps.disabled) {
            this._disabled = nextProps.disabled;
            this.setState({
                disabled: this._disabled
            });
        }
    }

    componentWillMount() {
    }

    render() {
        let touchableProps = {
            activeOpacity: this.props.disabled ? 1 : 0.2,
        };
        //Initialize business logic for touchable areas
        touchableProps.onPress = () => {
            if (this._disabled) {
                return;
            }
            if (this.props.onPress) {
                let selected = this._selected;
                if (!selected) {
                    this._selected = !this._selected;
                    this.setState({
                        selected: this._selected,
                    });
                }
                this.props.onPress && this.props.onPress(this);
            }
        };
        touchableProps.onPressIn = this.props.onPressIn;
        touchableProps.onPressOut = this.props.onPressOut;
        touchableProps.onLongPress = this.props.onLongPress;
        let root_style = [];
        let textColor;
        root_style[0] = styles.button_container;
        if (this.state.disabled === true) {
            root_style[1] = styles.enabled_border;
            textColor = '#999999';
        } else {
            root_style[1] = styles.disabled_border;
            textColor = "#696D7F";
            if (this.state.selected === true) {
                root_style[1] = styles.select_border;
                textColor = "#00BCBC";
            }
        }
        if (this.props.style) {
            root_style[2] = this.props.style;
        }

        return (
            <TouchableOpacity
                {...touchableProps}
                style={[root_style, {marginTop: 10}]}
                accessibilityTraits="button"
                accessibilityComponentType="button">
                <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
                    {this.renderButton(textColor)}
                </View>
            </TouchableOpacity>
        )
    }

    renderButton = (textColor) => {
        return (
            <ItemButtonComponent
                selected={this.state.selected}
                data={this.state.data}
                styles={[{color: textColor}]}
                cashSymbol={'¥'}/>
        )
    };

    //Provide external calls
    changeSelectedState = (selected) => {
        if (this._selected !== selected) {
            this._selected = selected;
            this.setState({
                selected: this._selected,
            });
        }
    };

}

const styles = StyleSheet.create({
    button_container: {
        borderRadius: 40,
        borderColor: '#999999',
        borderWidth: 1,
        paddingVertical: 2,
        marginTop: SCALE_DIMENSION_SIZE(10),
        marginVertical: SCALE_DIMENSION_SIZE(4),
        paddingHorizontal: SCALE_DIMENSION_SIZE(4),
        minHeight: SCALE_DIMENSION_SIZE(70),
        marginHorizontal: SCALE_DIMENSION_SIZE(20),
    },
    disabled_border: {
        borderColor: "#696D7F",
    },
    enabled_border: {
        color: '#999999',
    },
    select_border: {
        borderColor: "#00BCBC",
    },
});
