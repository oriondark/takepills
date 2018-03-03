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
var customData = require('takepills/data/sched.json');
const mydata = [
  {
    key: "Prescription123",
    prescriptionid: "Prescription123",
    drugname: 'Amoxicillian',
    drugdosage: '2 Pills',
    musttakewithfood: false,
    musttakewithoutfood: false,
    timetoday: '9:00 AM',
    drugmedicinedosage: "500 MG",
    color: "#ff0000",
    alarmon: true
  },
  {
    key: "Prescription456",
    prescriptionid: "Prescription456",
    drugname: 'Metformin',
    drugdosage: '2 Pills',
    musttakewithfood: false,
    musttakewithoutfood: false,
    timetoday: '9:00',
    drugmedicinedosage: "500 MG",
    color: "#800080",
    alarmon: true
  },
  {
    key: "Prescription789",
    prescriptionid: "Prescription789",
    drugname: 'Coumadin',
    drugdosage: '3 Pills',
    musttakewithfood: false,
    musttakewithoutfood: false,
    timetoday: '9:00 AM',
    drugmedicinedosage: "850 MG",
    color: "#00688B",
    alarmon: true
  },
  {
    key: "Prescription111",
    prescriptionid: "Prescription111",
    drugname: 'Zoloft',
    drugdosage: '2 Pills',
    musttakewithfood: false,
    musttakewithoutfood: false,
    timetoday: '9:00 AM',
    drugmedicinedosage: "50 MG",
    color: "#006400",
    alarmon: true
  },
  {
    key: "Prescription22",
    prescriptionid: "Prescription22",
    drugname: 'Tamiflu',
    drugdosage: '1 Pill',
    musttakewithfood: false,
    musttakewithoutfood: false,
    timetoday: '9:00 AM',
    drugmedicinedosage: "75 MG",
    color: "#cc5500",
    alarmon: true
  },
];

export default class DailySchedule extends Component {
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
          </Header>
          <Content>
            {
              mydata.map((data) => {
                return (
                  <View key={data.prescriptionid} style={{ padding: 7, flexDirection: 'row', alignItems: 'center', paddingTop: Constants.statusBarHeight }}>
                    <Card style={{ borderRadius: 4, borderWidth: 0.5 }}>
                      <CardItem>
                        <Left>
                          <Text style={{ color: data.color, fontSize: 16 }}>{data.drugname}</Text>
                        </Left>
                        <Body>
                          <Right>
                            <Text>{data.drugdosage}</Text>
                            <Text note>{data.drugmedicinedosage}</Text>
                          </Right>
                        </Body>
                        <Right>
                          <Text style={{ fontWeight: "bold" }} >{data.timetoday}</Text>
                        </Right>
                      </CardItem>
                      <CardItem>
                        <Left>
                          <Icon name="calendar" style={{ color: data.color, fontSize: 50 }} />
                        </Left>
                        <Body>
                          <Icon name="alarm" style={{ color: data.color, fontSize: 50 }} />
                        </Body>
                        <Right>
                          <Icon name="settings" style={{ fontSize: 50 }} />
                        </Right>
                      </CardItem>
                    </Card>
                    <Button style={{ borderRadius: 4, borderWidth: 0.5 }}><Icon name="checkmark-circle" style={{ fontSize: 50 }} /></Button>
                  </View>
                );
              })
            }
          </Content>
        </Container>
      </StyleProvider >
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