import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Image, TouchableHighlight } from 'react-native';
import { Constants, MapView } from 'expo';
import getTheme from 'takepills/native-base-theme/components';
import material from 'takepills/native-base-theme/variables/material';
import {
    Container,
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
    StyleProvider,
    Content
} from "native-base";
import Communications from 'react-native-communications';

export default class MenuHeader extends Component {

    render() {

        return (
        <Header>
            <Left>
                <Button transparent onPress={() => this.props.navigation.navigate('DrawerOpen')}>
                    <Icon name="menu" />
                </Button>
            </Left>
            <Body>
                <Button transparent onPress={() => this.props.navigation.navigate.navigate('DrawerOpen')}>
                    <Icon name="arrow-back" />
                </Button>
            </Body>
            <Right>
                <Button transparent onPress={() => Communications.phonecall('4234866674', true)}>
                    <Icon name="call" />
                </Button>
                <Button transparent onPress={() => Communications.textWithoutEncoding('4232270153', 'Does this silly thing work?')}>
                    <Icon name="chatbubbles" />
                </Button>
                <Button transparent>
                    <Icon name="home" />
                </Button>
            </Right>
        </Header>);

    }

}