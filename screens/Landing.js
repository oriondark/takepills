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
    StyleProvider,
    Content
} from "native-base";
import Communications from 'react-native-communications';

var customData = require('takepills/data/sched.json');
export default class Landing extends Component {

    constructor(props) {
        super(props);
        this.state = {
        isReady: false
        };
    };
    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
        });
        this.setState({ isReady: true });
    };



    render() {
        if (!this.state.isReady) {
            return <Expo.AppLoading />;
            }
        
            
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
                        <Card>
                            <CardItem>
                                <Left>
                                    <Button onPress={() => this.props.onRoute("CurrentRx")}><Text>CurrentRx</Text></Button>
                                </Left>
                                <Right>
                                    <Button onPress={() => this.props.onRoute("DailySchedule")}><Text>Daily Schedule</Text></Button>
                                </Right>
                            </CardItem>
                            <CardItem>
                                <Left>
                                    <Button onPress={() => this.props.onRoute("InsuranceInfo")}><Text>Insurance Info</Text></Button>
                                </Left>
                                <Right>
                                    <Button onPress={() => this.props.onRoute("PharmaList")}><Text>Pharmacies</Text></Button>
                                </Right>
                            </CardItem>
                            <CardItem>
                                <Left>
                                    <Button onPress={() => this.props.onRoute("Pharma")}><Text>Insurance Info</Text></Button>
                                </Left>
                               
                            </CardItem>
                        </Card>
                    </Content>
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