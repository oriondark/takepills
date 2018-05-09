import React, { Component } from "react";
import { AppRegistry, Image, StatusBar, ImageBackground,StyleSheet } from "react-native";
import { Container, Content, Text, List, ListItem } from "native-base";
import getTheme from 'takepills/native-base-theme/components';
import material from 'takepills/native-base-theme/variables/material';

const routes = ["CurrentRx", "DailySchedule", "Pharma", "PharmaList", "InsuranceInfo", "Camera"];
export default class SideBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <StyleProvider style={getTheme(material)}>
        <Container>
          <Content>
            <ImageBackground
              source={require('takepills/img/drawerback.jpg')}
              style={{
                height: 120,
                alignSelf: "stretch",
                justifyContent: "center",
                alignItems: "center"
              }}>
              <Image
                square
                style={{ height: 80, width: 70 }}
                source={require('takepills/img/shealth.png')}
              />
            </ImageBackground>
            <List
              dataArray={routes}
              renderRow={data => {
                return (
                  <ListItem
                    button onPress={() => this.props.navigation.navigate(data)}
                  >
                    <Text>{data}</Text>
                  </ListItem>
                );
              }}
            />
          </Content>
        </Container>
      </StyleProvider>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'green',
    width: 600
  },
  textContent: {
    fontSize: 20,
    color: 'red',
  },
};