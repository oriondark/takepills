import React, { Componentt } from "react";
import { Root, Text } from "native-base";
import { StyleSheet } from 'react-native';
import { StackNavigator, DrawerNavigator } from "react-navigation";
import CurrentRx from "./screens/CurrentRx";
import SideBar from "./screens/SideBar";
import DailySchedule from "./screens/DailySchedule";
import Pharma from "./screens/Pharma";
import PharmaList from "./screens/PharmaList";
import InsuranceInfo from "./screens/InsuranceInfo";
import Landing from "./screens/Landing";
import Camera from "./screens/Camera";
import Test from "./screens/Test";

const Drawer = DrawerNavigator(
    {
     
    Pharma: { screen: Pharma },
    CurrentRx: { screen: CurrentRx },
    DailySchedule: {screen: DailySchedule},
    PharmaList: { screen: PharmaList },
    InsuranceInfo: { screen: InsuranceInfo },
    Landing: { screen: Landing },
    Camera: { screen: Camera },
    Test: { screen: Test }
    // Proscriber: { screen: Proscriber },
    // ProscriberList:{screen:ProscriberList},
  },
  {
    initialRouteName: "Landing",
    contentOptions: {
      activeTintColor: "#fff"
    },
    contentComponent: props => <SideBar {...props} />
  }
);
const AppNavigator = StackNavigator(
  {
    Drawer: { screen: Drawer }
  },
  {
    initialRouteName: "Drawer",
    headerMode: "none"
  }
);




export default class App extends React.Component {
  constructor(props) {
    super(props);
    // var omniData = require('takepills/data/sched.json');
    this.state = {
      pharmData: require('takepills/data/go.json'),
      pharmList: require('takepills/data/pharmacy.json'),
      routeName: "Landing"
    };

   
  }
  render() {
    return(
    <AppNavigator />
  );
  }
}


  class Figures extends React.Component {
  constructor(props) {
    super(props);
    // var omniData = require('takepills/data/sched.json');
    this.state = {
      pharmData: require('takepills/data/go.json'),
      pharmList: require('takepills/data/pharmacy.json'),
      routeName: "Landing"
    };
    // console.log(this.state.pharmData);
  }
  onRouteChange(routename) {
    console.log(routename);

    this.setState({ routeName: routename })
  };

  onPharmacySelect(pharmacy) {
    console.log("app pharamcy selected called");
    console.log(pharmacy);
    this.setState({ routeName: "Pharma", selectedpharmacy: pharmacy })
  }
  render() {
    <AppNavigator/>
    
    switch (this.state.routeName) {
      case 'Test':
        return (<Test mydata={this.state.pharmData.prescriptions} />);
      case 'Landing':
        return (<Landing
          onRoute={(routename) => this.onRouteChange(routename)} navigator={navigator} />);
      case 'Pharma':
        return (<Pharma Pharmacy={this.state.selectedpharmacy} />);
      case 'CurrentRx':
        return (<CurrentRx />);
      case 'DailySchedule':
        return (<DailySchedule mydata={this.state.pharmData.prescriptions} />);
      case 'InsuranceInfo':
        return (<InsuranceInfo />);
      case 'PharmaList':
        return (<PharmaList mydata={this.state.pharmList}
          onPharmacy={(pharmacy) => this.onPharmacySelect(pharmacy)} />);

    }

  }
  mymenu() {
    return (
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
      </Container>);

  }
}


const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
  },
  activeTitle: {
    color: 'red',
  },
});