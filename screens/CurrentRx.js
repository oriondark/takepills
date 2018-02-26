import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList, Image, TouchableHighlight } from 'react-native';
import { Constants, MapView } from 'expo';
var customData = require('takepills/data/sched.json');
export default class CurrentRx extends Component {
    render() {
        return (
            <View>
                <FlatList
                    data={[
                        { key: '1', name: 'Amoxicillan', amt: '500 MG' },
                        { key: '2', name: 'Coumadin', amt: '500 MG' },
                        { key: '3', name: 'Metformin', amt: '500 MG' },
                        { key: '4', name: 'Dilotid', amt: '500 MG' }
                    ]}
                    renderItem={({ item }) => {
                        return <View style={styles.itemContainer}>
                            <View style={styles.infoContainer}>
                                <View style={styles.topRow}>
                                    <Image style={{ width: 50, height: 50 }} source={require("takepills/img/assets/calendar.png")} />
                                    <Text> {item.name} {item.amt}</Text>
                                    <Image style={{ width: 50, height: 50 }} source={require("takepills/img/assets/info.png")} />
                                </View>
                            </View>
                        </View>
                    }}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#34495e',
    },
    //Daily Schedule
    itemContainer: {
        padding: 7,
        flexDirection: 'row',
        borderRadius: 4,
        borderWidth: 0.5,
        // yellow main container
        borderColor: '#FFFF00',
    },
    infoContainer: {
        padding: 10,
        alignSelf: 'stretch',
        flex: 0.8,
        borderRadius: 4,
        borderWidth: 0.5,
        // green info container
        borderColor: '#00FF00',
    },
    topRow: {
        padding: 3,
        //fontSize: 18,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 4,
        borderWidth: 0.5,
        // red top row
        borderColor: '#FF0000',
    },
    bottomRow: {
        marginTop: 6,
        padding: 3,
        //fontSize: 18,
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderRadius: 4,
        borderWidth: 0.5,
        // blue bottom row
        borderColor: '#0000FF',
    },
    timeText: {
        marginLeft: 7,
    },
    drugName: {
    },
    pillText: {
        marginLeft: 5,
    },
    doneContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        flex: 0.2,
        borderRadius: 4,
        borderWidth: 0.5,
        // black for notification
        borderColor: '#000000',
    }
});