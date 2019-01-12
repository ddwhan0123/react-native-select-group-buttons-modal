import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import RNSelectGroupButtonsModal from './components/view/RNSelectGroupButtonsModal';

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Open up App.js to start working on your app!</Text>
                <RNSelectGroupButtonsModal selectorVisible={false}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop:50,
    },
});
