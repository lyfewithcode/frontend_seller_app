import React, {useState, useEffect} from 'react';
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
import { useTheme, useIsFocused } from '@react-navigation/native';
import {Picker} from '@react-native-community/picker';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Axios from 'axios'
import {urlDevice, urlEmulator} from './url'
import moment from 'moment';

const SalesDetailScreen = ({navigation, route}) => {

  const { colors } = useTheme();

  const theme = useTheme();

  const [refreshing, setRefreshing] = useState(false);
  const [dataTransaction, setDataTransaction] = useState([])
  const getTransaction = async () => {
    const {transaction_id} = route.params
      setRefreshing(true)
      let url = urlEmulator;
      await Axios.get(url + "/transaction/" + transaction_id)
      .then(res => {
          console.log(res.data.data)
        setDataTransaction(res.data.data)
        setRefreshing(false)
      })
      .catch(err=>{
        setRefreshing(false)
      })
  }
  useEffect(() => {
      getTransaction()
  }, [route.params])
    
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='#2431a8' barStyle="light-content"/>
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
                    value={dataTransaction.price + ""}
                    // onChangeText={(val) => textInputChange(val)}
                />
            </View>
            <Text style={[styles.text_footer, {
                marginTop: 25,marginBottom: 10
            }]}>Product List</Text>
            {
                dataTransaction.product.map((item, i) => {
                    return (
                        <View key={item.product_id}>
                            <View style={{flexDirection: 'row', paddingLeft: 27, paddingBottom: 5}}>
                            <FontAwesome 
                                name="user-o"
                                color="#05375a"
                                size={20}
                            />
                                <Text style={{color: '#05375a', fontSize: 16, paddingLeft: 30, fontWeight: 'bold'}}>
                                    {item.product_name}
                                </Text>
                            </View>
                            <View style={{flexDirection: 'row', marginTop: 5, paddingBottom: 20}}>
                                <Text style={{color: '#05375a', paddingLeft: 72, fontWeight: 'bold'}}>{item.category_name}</Text>
                            </View>
                        </View>
                    )
                })
            }
            

            <Text style={[styles.text_footer, {
                marginTop: 25
            }]}>Date</Text>
            <View style={styles.action}>
                <TextInput 
                    placeholder="Today"
                    style={styles.textInput}
                    autoCapitalize="none"
                    value={moment(dataTransaction.created_date).format("dddd, DD MMMM YYYY")}
                    // onChangeText={(val) => textInputChange(val)}
                />
            </View>
            <Text style={[styles.text_footer, {
                marginTop: 25
            }]}>Payment</Text>
            <View style={styles.action}>
                <Picker style={styles.dropdown}>
                    <Picker.Item label={dataTransaction.payment_name} value="payment" />
                </Picker>
            </View>
            <Text style={[styles.text_footer, {
                marginTop: 25
            }]}>Customer</Text>
            <View style={styles.action}>
                <Picker style={styles.dropdown}>
                    <Picker.Item label={dataTransaction.customer_name} value="customer" />
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
                    value={dataTransaction.notes}
                    // onChangeText={(val) => textInputChange(val)}
                />
            </View>

        </ScrollView>
        </View>
        </View>
    );
  };

export default SalesDetailScreen;

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