import React, { Componentt } from "react";
import { Root } from "native-base";
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
    PharmaList:{screen:PharmaList},
    InsuranceInfo:{screen:InsuranceInfo},
    Landing:{screen:Landing},
    Camera:{screen:Camera}
    
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
export default () =>
  <Root>
     <AppNavigator />
  </Root>;
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