import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Alert,
  Text,
  Button,
  ScrollView,
  StatusBar,
  TextInput } from 'react-native';
import { Appbar } from 'react-native-paper';
import { useTheme } from '@react-navigation/native';
import {Picker} from '@react-native-community/picker';
import LinearGradient from 'react-native-linear-gradient';

const TransactionDetailScreen = ({navigation}) => {

  const { colors } = useTheme();

  const theme = useTheme();
    
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='#008adc' barStyle="light-content"/>
        <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
            <Appbar.Content
                title="Transaction Detail"
                // subtitle="Subtitle"
                />
        </Appbar.Header>
        <View 
            style={styles.footer}
        >
        <ScrollView>
        <Text style={[styles.text_footer, {
                marginTop: 25
            }]}>Price</Text>
            <View style={styles.action}>
                <TextInput 
                    placeholder="Rp 2,699,000"
                    style={styles.textInput}
                    autoCapitalize="none"
                    // onChangeText={(val) => textInputChange(val)}
                />
            </View>
            <Text style={[styles.text_footer, {
                marginTop: 25
            }]}>Category</Text>
            <View style={styles.action}>
                <Picker style={styles.dropdown}>
                    <Picker.Item label="Smartphone" value="smartphone" />
                    <Picker.Item label="Accessories" value="accessories" />
                    <Picker.Item label="Others" value="others" />
                </Picker>
            </View>
            <Text style={[styles.text_footer, {
                marginTop: 25
            }]}>Product Name</Text>
            <View style={styles.action}>
                <TextInput 
                    placeholder="Rp 2,699,000"
                    style={styles.textInput}
                    autoCapitalize="none"
                    // onChangeText={(val) => textInputChange(val)}
                />
            </View>
            <Text style={[styles.text_footer, {
                marginTop: 25
            }]}>Date</Text>
            <View style={styles.action}>
                <TextInput 
                    placeholder="Today"
                    style={styles.textInput}
                    autoCapitalize="none"
                    // onChangeText={(val) => textInputChange(val)}
                />
            </View>
            <Text style={[styles.text_footer, {
                marginTop: 25
            }]}>Customer</Text>
            <View style={styles.action}>
                <Picker style={styles.dropdown}>
                    <Picker.Item label="Customer" value="customer" />
                    <Picker.Item label="Branch Store" value="branchStore" />
                    <Picker.Item label="Online Store" value="onlineStore" />
                    <Picker.Item label="Others" value="others" />
                </Picker>
            </View>
            <Text style={[styles.text_footer, {
                marginTop: 25
            }]}>Notes</Text>
            <View style={styles.action}>
                <TextInput 
                    placeholder="Optional"
                    style={styles.textInput}
                    autoCapitalize="none"
                    // onChangeText={(val) => textInputChange(val)}
                />
            </View>
            <View style={styles.button}>
                <TouchableOpacity
                    style={styles.signIn}
                    onPress={() => {}}
                >
                <LinearGradient
                    colors={['#02b6ff', '#008adc']}
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Save</Text>
                </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={[styles.signIn, {
                        borderColor: '#008adc',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#008adc'
                    }]}>Cancel</Text>
                </TouchableOpacity>
            </View>

        </ScrollView>
        </View>
        </View>
    );
  };

export default TransactionDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#008adc'
  },
  header: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingHorizontal: 10,
      paddingBottom: 10
  },
  footer: {
      flex: 1,
      backgroundColor: '#fff',
      paddingLeft: 20,
      paddingRight: 20,
      // borderTopLeftRadius: 10,
      // borderTopRightRadius: 10,
      
  },
  text_header: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 30
  },
  text_footer: {
      color: '#05375a',
      fontSize: 18
  },
  action: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#f2f2f2',
      paddingBottom: 5
  },
  textInput: {
      flex: 1,
      marginTop: Platform.OS === 'ios' ? 0 : -12,
      paddingLeft: 10,
      color: '#05375a',
  },
  button: {
      alignItems: 'center',
      marginTop: 50
  },
  signIn: {
      width: '100%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10
  },
  textSign: {
      fontSize: 18,
      fontWeight: 'bold'
  },
  textPrivate: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginTop: 20
  },
  color_textPrivate: {
      color: 'grey'
  },
  dropdown: {
      flex: 1,
      marginTop: Platform.OS === 'ios' ? 0 : -12,
      paddingLeft: 25,
      color: '#05375a',
  },
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },

  TouchableOpacityStyle: {
    //Here is the trick
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 20,
    bottom: 25,
  },

  FloatingButtonStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
    //backgroundColor:'black'
  },
  dropdown: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
},
});