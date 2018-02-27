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
  StyleProvider
} from "native-base";
var customData = require('takepills/data/sched.json');
export default class CurrentRx extends Component {
  render() {
    return (

      <StyleProvider style={getTheme(material)}>
        <Container>
          <Header>
            <Left>
              <Button transparent onPress={() => this.props.navigation.navigate('DrawerOpen')}>
                <Icon name="menu" />
              </Button>
            </Left>
            <Body>
              <Title>Daily Schedule</Title>
            </Body>
            <Right />
          </Header>

          <View>
            <FlatList
              data={[
                { key: 'Amoxicillian', pill: '2 Pills', time: '9:00', icon1: '1', icon2: '2', icon3: '3' },
                { key: 'Jackson', pill: '2 Pills', time: '9:00', icon1: '1', icon2: '2', icon3: '3' },
                { key: 'James', pill: '2 Pills', time: '9:00', icon1: '1', icon2: '2', icon3: '3' },
                { key: 'Joel', pill: '2 Pills', time: '9:00', icon1: '1', icon2: '2', icon3: '3' },
                { key: 'John', pill: '2 Pills', time: '9:00', icon1: '1', icon2: '2', icon3: '3' },
                { key: 'Jillian', pill: '2 Pills', time: '9:00', icon1: '1', icon2: '2', icon3: '3' },
                { key: 'Jimmy', pill: '2 Pills', time: '9:00', icon1: '1', icon2: '2', icon3: '3' },
                { key: 'Julie', pill: '2 Pills', time: '9:00', icon1: '1', icon2: '2', icon3: '3' },
              ]}
              renderItem={({ item }) => {
                return <View style={styles.itemContainer}>
                  <View style={styles.infoContainer}>
                    <View style={styles.topRow}>
                      <Text style={styles.drugName}>
                        {item.key}
                      </Text>
                      <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.pillText}>
                          {item.pill}
                        </Text>
                        <Text style={styles.timeText}>
                          {item.time}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.bottomRow}>
                      <Image style={{ width: 50, height: 50 }} source={require("takepills/img/assets/calendar.png")} />
                      <Image style={{ width: 50, height: 50 }} source={require("takepills/img/assets/alarm.png")} />
                      <Image style={{ width: 50, height: 50 }} source={require("takepills/img/assets/settings.png")} />

                    </View>
                  </View>
                  <View style={styles.doneContainer}>
                    <Image
                      source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/cat.gif' }}
                      style={{ height: 40, width: 40 }}
                    />
                  </View>
                </View>
              }}
            />
          </View>
        </Container>
      </StyleProvider>
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