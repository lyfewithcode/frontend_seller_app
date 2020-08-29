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
  Modal,
  TextInput } from 'react-native';
import { Card, Avatar, IconButton,Appbar } from 'react-native-paper';
import { useTheme, useIsFocused } from '@react-navigation/native';
import {Picker} from '@react-native-community/picker';
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment';
import Axios from 'axios'
import {urlDevice, urlEmulator} from './url'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';

const AddTransactionScreen = ({navigation}) => {
  const isVisible = useIsFocused();
  const { colors } = useTheme();

  const theme = useTheme();
  const [price, setPrice] = useState(0)
  const [payment, setPayment] = useState("");
  const [customer, setCustomer] = useState("");
  const [notes, setNotes] = useState("");
  const [show, setShow] = useState(false);
  const [dataProduct, setDataProduct] = useState([]);
  const [selectProduct, setSelectProduct] = useState([]);

  const getProduct = async () => {
        let url = urlEmulator;
        await Axios.get(url + "/product")
        .then(res => {
            setDataProduct(res.data.data)
        })
        .catch(err=>{
        })
    }

    const SelectProduct = (value) => {
        let products = selectProduct.concat(value);
        setSelectProduct(products)
        SetPriceProduct(products)
    }
 
    const UnSelectProduct = (id) => {
        let products = selectProduct.filter(item => {
            return item.product_id != id
        })
        setSelectProduct(products);
        SetPriceProduct(products)
    }

    const UnDataProduct = (id) => {
        let products = dataProduct.filter(item => {
            return item.product_id != id
        })
        setDataProduct(products);
        
    }

    const AddDataProduct = (value) => {
        let products = dataProduct.concat(value);
        setDataProduct(products)
    }

    const SetPriceProduct = (products) => {
        let price = 0;
        for(let i = 0; i < products.length; i++){
            price += products[i].price
        }
        setPrice(price);
    }

  useEffect(() => {
    getProduct();
    setPrice(0);
    setPayment("");
    setCustomer("");
    setNotes("");
    setSelectProduct([]);
  }, [isVisible])


  const SaveData = async () => {
    let token = await AsyncStorage.getItem('userToken');
    let user_id = await AsyncStorage.getItem('user_id');
    let product_id = ""
    for(let i = 0; i < selectProduct.length; i++){
        if(i == 0){
            product_id += selectProduct[i].product_id
        }else if(i > 0){
            product_id += ","+selectProduct[i].product_id
        }
    }
    let data = {
        price : price,
        product_id : product_id,
        payment_id : payment,
        customer_id : customer,
        notes : notes,
        store_id : user_id
    }
    console.log(data)
    
    let url = urlEmulator; // untuk emulator
    await Axios.post(url + "/transaction", data, {headers : {
      Authorization : token
    }})
    .then(res => {
      if(res.data.status == 200) {
          Alert.alert("Success", "Add Transaction success")
          navigation.navigate("SalesScreen")
      }else{
          Alert.alert("Failed", "Add Transaction failed")
      }

    })
    .catch(err => {
      Alert.alert("Failed", "failed add Transaction error : " + err )
    })
  }

    
    return (
      <View style={styles.container}>
        <Modal 
            animationType="slide"
            visible={show}
            onRequestClose={() => setShow(false)}
        >
            <ScrollView>
            {
                dataProduct.map((item, index) => {
                    return (
                        <Card style={{marginBottom: 10}}  key={item.product_id} onPress={() => {SelectProduct(item); setShow(false); UnDataProduct(item.product_id)}}>
                            <Card.Title
                            title={item.product_name}
                            subtitle={item.price}
                            left={(props) => <Image source={{uri : urlEmulator + "/product/image/" + item.picture}} style={{resizeMode: 'cover', width: 50, height: 50}}/>}
                            
                        />
                        <View style={{flexDirection: 'row', paddingBottom: 15}}>
                            <Text style={{color: '#05375a', paddingLeft: 72, fontWeight: 'bold'}}>{item.stock !== null || item.stock !== null ? item.stock : "Not"} Available</Text>
                        </View>
                        </Card>
                    )
                })
            }
            </ScrollView>
        </Modal>
        <StatusBar backgroundColor='#2431a8' barStyle="light-content"/>
        <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
            <Appbar.Content
                title="Add Transaction"
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
                    placeholder="Rp 0"
                    style={styles.textInput}
                    autoCapitalize="none"
                    editable={false}
                    value={"Rp." + price}
                    // onChangeText={(val) => textInputChange(val)}
                />
            </View>
            <Text style={[styles.text_footer, {
                marginTop: 25
            }]}>Product</Text>
            <View style={{...styles.action, flexDirection: 'column'}}>
                <TouchableOpacity onPress={() => setShow(true)} style={{padding: 10}}>
                    <Text style={styles.textInput}>Select Product</Text>
                </TouchableOpacity>
                {
                    selectProduct.map((product, i) => {
                        return (
                            <TouchableOpacity key={product.product_id} onPress={() => {UnSelectProduct(product.product_id); AddDataProduct(product)}}>
                            <View style={{flexDirection: 'row', paddingLeft: 27, paddingBottom: 5}}>
                                <FontAwesome 
                                    name="user-o"
                                    color="#05375a"
                                    size={20}
                                />
                                <Text style={{color: '#05375a', fontSize: 16, paddingLeft: 30, fontWeight: 'bold'}}>
                                    {product.product_name}
                                </Text>
                            </View>
                            <View style={{flexDirection: 'row', marginTop: 5, paddingBottom: 20}}>
                                <Text style={{color: '#05375a', paddingLeft: 72, fontWeight: 'bold'}}>{product.category_name}</Text>
                            </View>
                            </TouchableOpacity>
                        )
                    })
                }

            </View>
            <Text style={[styles.text_footer, {
                marginTop: 25
            }]}>Payment</Text>
            <View style={styles.action}>
                <Picker style={styles.dropdown} selectedValue={payment} onValueChange={(val) => setPayment(val)}>
                    <Picker.Item label="Select Payment" value="" />
                    <Picker.Item label="Cash" value="1" />
                    <Picker.Item label="Debit" value="2" />
                    <Picker.Item label="Credit" value="3" />
                    <Picker.Item label="Transfer Bank" value="4" />
                </Picker>
            </View>
            <Text style={[styles.text_footer, {
                marginTop: 25
            }]}>Date</Text>
            <View style={styles.action}>
                <TextInput 
                    placeholder="Today"
                    style={styles.textInput}
                    autoCapitalize="none"
                    value={moment().format("dddd, DD MMMM YYYY")}
                    // onChangeText={(val) => textInputChange(val)}
                />
            </View>
            <Text style={[styles.text_footer, {
                marginTop: 25
            }]}>Customer</Text>
            <View style={styles.action}>
                <Picker style={styles.dropdown} selectedValue={customer} onValueChange={(val) => setCustomer(val)}>
                    <Picker.Item label="Select Customer" value="" />
                    <Picker.Item label="Customer" value="1" />
                    <Picker.Item label="Branch Store" value="2" />
                    <Picker.Item label="Online Store" value="3" />
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
                    onChangeText={(val) => setNotes (val)}
                />
            </View>
            <View style={styles.button}>
                <TouchableOpacity
                    style={styles.signIn}
                    onPress={() => SaveData()}
                >
                <LinearGradient
                    colors={['#2431a8', '#3f4fe8']}
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
                        borderColor: '#3f4fe8',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#3f4fe8'
                    }]}>Cancel</Text>
                </TouchableOpacity>
            </View>

        </ScrollView>
        </View>
        </View>
    );
  };

export default AddTransactionScreen;

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