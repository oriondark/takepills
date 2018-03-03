import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Image, TouchableHighlight } from 'react-native';
import { Constants, MapView } from 'expo';
import getTheme from 'takepills/native-base-theme/components';
import material from 'takepills/native-base-theme/variables/material';
import Communications from 'react-native-communications';
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
import { StackNavigator, DrawerNavigator } from "react-navigation";

export default class SlimHeader extends Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
      return (
<Header>
<Left>
  <Button transparent onPress={() => this.props.navigation.navigate('DrawerOpen')}>
    <Icon name="menu" />
  </Button>
</Left>
<Body>
<Button transparent onPress={() => this.props.navigation.navigate('DrawerOpen')}>
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
</Header>);}}