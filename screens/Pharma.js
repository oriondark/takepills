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
import Communications from 'react-native-communications';


var customData = require('takepills/data/sched.json');
export default class Pharma extends Component {
  state = {
    isMapReady: false,
    mapRegion: { latitude: this.props.Pharmacy.latitude, longitude: this.props.Pharmacy.longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421 },
   /*  mapRegion: { latitude: 35.8722944, longitude: -86.3918846, latitudeDelta: 0.0922, longitudeDelta: 0.0421 },
    pharm a: { name: "12 StoneHealth", street: "352 W Northfield Blvd #3", city: "Murfreesboro", state: "TN", "postcode": 37129, "image": require("takepills/img/assets/pharma.jpg"), phone: "(844) 893-0012" }
  */
  };
  _handleMapRegionChange = mapRegion => {
    this.setState({ mapRegion });
  };
  onMapLayout = () => {
    this.setState({ isMapReady: true });
  }
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
          <View style={styles.itemContainer}>
            <View style={styles.infoContainer}>
              <Text> {this.props.Pharmacy.name}</Text>
              <Text>
                <Image style={{ width: 100, height: 100 }} source={this.props.Pharmacy.image} />
              </Text>
              <Text>  {this.props.Pharmacy.street}</Text>
              <Text> {this.props.Pharmacy.city} , {this.props.Pharmacy.postcode}</Text>
              <Text> {this.props.Pharmacy.phone}
              </Text>

              <MapView
                style={{ alignSelf: 'stretch', height: 200 }}
                region={this.state.mapRegion}
                onLayout={this.onMapLayout}
                onRegionChange={this._handleMapRegionChange}
              >
                {this.state.isMapReady &&
                  <MapView.Marker
                    title= {this.props.Pharmacy.name}
                    coordinate={{
                      latitude: this.props.Pharmacy.latitude,
                      longitude: this.props.Pharmacy.longitude
                    }} />
                }
              </MapView>
            </View>
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