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
const Drawer = DrawerNavigator(
  {

    Pharma: { screen: Pharma },
    CurrentRx: { screen: CurrentRx },
    DailySchedule: { screen: DailySchedule },
    PharmaList: { screen: PharmaList },
    InsuranceInfo: { screen: InsuranceInfo },
    Landing: { screen: Landing },
    Camera: { screen: Camera }

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

      routeName: "Landing"
    };
  }
  onRouteChange(routename) {
    console.log(routename);

    this.setState({ routeName: routename })
  };
  render() {
    <AppNavigator />
    switch (this.state.routeName) {

      case 'Landing':
        return (<Landing
          onRoute={(routename) => this.onRouteChange(routename)} />);
      case 'Pharma':
        return (<PharmaList />);
      case 'CurrentRx':
        return (<CurrentRx />);
      case 'DailySchedule':
        return (<DailySchedule />);
      case 'InsuranceInfo':
        return (<InsuranceInfo />);
      case 'PharmaList':
        return (<PharmaList />);

    }

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