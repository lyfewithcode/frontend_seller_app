import React, { useState, useEffect } from "react";
import { View, StyleSheet } from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch,
    Picker,
    List
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import AsyncStorage from '@react-native-community/async-storage';
import{ AuthContext } from '../components/context';

export function DrawerContent(props) {

    const paperTheme = useTheme();

    const [data, setData] = useState({
        name : "Victoria Store",
        email : "victoria@store.com"
    })

    const { signOut, toggleTheme } = React.useContext(AuthContext);

    useEffect(() => {
        setTimeout(async() => {
            // setIsLoading(false);
            let name = null;
            let email = null;
            try {
              name = await AsyncStorage.getItem('name');
              email = await AsyncStorage.getItem('email');
            } catch(e) {
            //   console.log(e);
            }
            setData({name: name, email: email});
        }, 1000);
    })

    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 50}}>
                            <Avatar.Image
                                source={require('../assets/images.png')} 
                                // source={{
                                //     uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'
                                // }}
                                size={60}
                            />
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>{data.name}</Title>
                                <Caption style={styles.caption}>{data.email}</Caption>
                            </View>
                        </View>
                    </View>
                    <View>
                    <List.Section style={{justifyContent: 'center', paddingLeft: 10, paddingRight: 10}}>
                        <List.Accordion
                        title="Choose Store"
                        // left={props => <List.Icon {...props} icon="folder" />}
                        >
                        <List.Item title="TEC - Techno Cellular"
                            onPress={() => {props.navigation.navigate('SearchProductScreen')}}/>
                        <List.Item title="COS - Communication Shop"
                            onPress={() => {props.navigation.navigate('SearchProductScreen')}}/>
                        <List.Item title="POC - Power Com"
                            onPress={() => {props.navigation.navigate('SearchProductScreen')}}/>
                        </List.Accordion>
                    </List.Section>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="home-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Home"
                            onPress={() => {props.navigation.navigate('HomeScreen')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="wallet-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Product"
                            onPress={() => {props.navigation.navigate('ProductScreen')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="wallet-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Sales"
                            onPress={() => {props.navigation.navigate('SalesScreen')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="wallet-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Sales Report"
                            onPress={() => {props.navigation.navigate('SupportScreen')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="settings-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Settings"
                            onPress={() => {props.navigation.navigate('SettingsScreen')}}
                        />
                    </Drawer.Section>
                    <Drawer.Section title="Preferences">
                        <TouchableRipple onPress={() => {toggleTheme()}}>
                            <View style={styles.preference}>
                                <Text>Dark Mode</Text>
                                <View pointerEvents="none">
                                    <Switch value={paperTheme.dark}/>
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="exit-to-app" 
                        color={color}
                        size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={() => {signOut()}}
                />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
    dropdown: {
        flex: 1,
        fontSize: 14,
        lineHeight: 14,
        color: '#05375a',
    }
  });