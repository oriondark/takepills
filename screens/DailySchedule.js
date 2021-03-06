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
import MenuHeader from "takepills/screens/MenuHeader";

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
  constructor(props) {
    super(props);
   console.log(this.props);
   console.log(this.props.navigation.state.params);
   this.state = {
    pharmData: require('takepills/data/go.json'),
    
  };
    // var omniData = require('takepills/data/sched.json');
  }
  render() {
    return (

      <StyleProvider style={getTheme(material)}>
        <Container>
        <MenuHeader navigation={this.props.navigation} />
          <Content>
            {
              this.state.pharmData.prescriptions.map((data) => {
                return (
                  <View key={data.prescriptionid} style={{ padding: 7, flexDirection: 'row', alignItems: 'center', paddingTop: Constants.statusBarHeight }}>
                    <Card style={{ borderRadius: 4, borderWidth: 0.5 }}>
                      <CardItem>
                        <Left>
                          <Text style={{ color: "black", fontSize: 16 }}>{data.medication.medicationame}</Text>
                        </Left>
                        <Body>
                          <Right>
                            <Text>{data.medication.medicationdosage}</Text>
                            <Text note>{data.medication.medicationdosagetype}</Text>
                          </Right>
                        </Body>
                        <Right>
                          <Text style={{ fontWeight: "bold" }} >{data.timetoday}</Text>
                        </Right>
                      </CardItem>
                      <CardItem>
                        <Left>
                          <Icon name="calendar" style={{ color: "black", fontSize: 50 }} />
                        </Left>
                        <Body>
                          <Icon name="alarm" style={{ color: "black", fontSize: 50 }} />
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