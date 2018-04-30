import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Image, TouchableHighlight } from 'react-native';
import { Constants, MapView } from 'expo';
import getTheme from 'takepills/native-base-theme/components';
import material from 'takepills/native-base-theme/variables/material';
import Communications from 'react-native-communications';
import SlimHeader from 'takepills/screens/SlimHeader';
import {
    Container,
    Content,
    Header,
    Title,
    Button,
    IconNB,
    DeckSwiper,
    Card,
    CardItem,
    Icon,
    Thumbnail,
    Text,
    Left,
    Right,
    Body,
    StyleProvider
} from "native-base";

export default class Test extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isReady: false
        };
    };
    render() {
        console.log(this.props.mydata);
        return (

            <Content>
                <Text>Here</Text>
                {
                    this.props.mydata.map((data) => {
                        return (<Text>{data.prescriptionid}-{data.medication.medicationame}-{data.medication.medicationdosage}</Text>);
                    })
                }
            </Content>
        );
    }
}