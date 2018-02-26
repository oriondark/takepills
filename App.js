import React, { Componentt } from "react";
import { Root } from "native-base";
import { StyleSheet } from 'react-native';
import { StackNavigator, DrawerNavigator } from "react-navigation";
import CurrentRx from "./screens/CurrentRx";
import SideBar from "./screens/SideBar";
const Drawer = DrawerNavigator(
  {
    CurrentRx: { screen: CurrentRx },
    // DailySchedule: { screen: DailySchedule },
    // Pharma: { screen: Pharma },
    // PharmaList:{screen:PharmaList},
    // Proscriber: { screen: Proscriber },
    // ProscriberList:{screen:ProscriberList},
  },
  {
    initialRouteName: "CurrentRx",
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