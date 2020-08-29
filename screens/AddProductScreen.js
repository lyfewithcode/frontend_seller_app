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
  Platform,
  TextInput } from 'react-native';
import { Appbar } from 'react-native-paper';
import { useTheme, useIsFocused } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Picker} from '@react-native-community/picker';
import LinearGradient from 'react-native-linear-gradient';
import { set } from 'react-native-reanimated';
import {urlEmulator, urlDevice} from './url';
import Axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const AddProductScreen = ({navigation}) => {
  const isVisibel = useIsFocused();
  const { colors } = useTheme();

  const theme = useTheme();

  const [nameProduct, setNameProduct] = useState('');
  const [categoryId, setCategoryId] = useState(0);
  const [price, setPrice] = useState(0);
  const [spesification, setSpesification] = useState('');
  const [warrantyId, setWarrantyId] = useState(0);
  const [picture, setPicture] = useState(null);
  const [notes, setNotes] = useState('');
  const [periodId, setPeriodId] = useState(0);
  const [stock, setStock] = useState(0);

  useEffect(() => {
    setNameProduct("")
    setCategoryId("")
    setPrice(0)
    setSpesification("")
    setWarrantyId("")
    setNotes("")
    setPeriodId(0)
    setStock(0)
  }, [isVisibel])

  const saveData = async () => {
      let dataProduct = {
          product_name : nameProduct,
          category_id : categoryId,
          price : price,
          spesification : spesification,
          warranty_id : warrantyId,
          notes : notes,
          period_id : periodId,
          stock : stock
      }
      console.log(dataProduct)
      let token = await AsyncStorage.getItem('userToken');
      let url = urlEmulator; // untuk emulator
      await Axios.post(url + "/product", dataProduct, {headers : {
        Authorization : token
      }})
      .then(res => {
        if(res.data.status == 200) {
            Alert.alert("Success", "Add product success")
            navigation.navigate("ProductScreen")
        }else{
            Alert.alert("Failed", "Add product failed")
        }

      })
      .catch(err => {
        Alert.alert("Failed", "failed add product error : " + err )
      })
  }
//   const [date, setDate] = useState(new Date(1598051730000));
//   const [mode, setMode] = useState('date');
//   const [show, setShow] = useState(false);

//   const onChange = (event, selectedDate) => {
//     const currentDate = selectedDate || date;
//     setShow(Platform.OS === 'ios');
//     setDate(currentDate);
//   };

//   const showMode = currentMode => {
//     setShow(true);
//     setMode(currentMode);
//   };

//   const showDatepicker = () => {
//     showMode('date');
//   };

//   const showTimepicker = () => {
//     showMode('time');
//   };

    
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='#2431a8' barStyle="light-content"/>
        <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
            <Appbar.Content
                title="Add Product"
                // subtitle="Subtitle"
                />
        </Appbar.Header>
        <View 
            style={styles.footer}
        >
        <ScrollView>
        <Text style={[styles.text_footer, {
                marginTop: 25
            }]}>Product Name</Text>
            <View style={styles.action}>
                <TextInput 
                    placeholder="Product Name"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => setNameProduct(val)}
                />
            </View>
            <Text style={[styles.text_footer, {
                marginTop: 25
            }]}>Price</Text>
            <View style={styles.action}>
                <TextInput 
                    placeholder="Rp 2,699,000"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => setPrice(val)}
                />
            </View>
            <Text style={[styles.text_footer, {
                marginTop: 25
            }]}>Category</Text>
            <View style={styles.action}>
                <Picker 
                    selectedValue={categoryId}
                    style={styles.dropdown} 
                    onValueChange={(val, id) => setCategoryId(val)}>
                    <Picker.Item label="Select Category" value="" />
                    <Picker.Item label="Smartphone" value="1" />
                    <Picker.Item label="Accessories" value="2" />
                    <Picker.Item label="Others" value="3" />
                </Picker>
            </View>
            <Text style={[styles.text_footer, {
                marginTop: 25
            }]}>Stock</Text>
            <View style={styles.action}>
                <TextInput 
                    placeholder="Quantity"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => setStock(val)}
                />
            </View>
            <Text style={[styles.text_footer, {
                marginTop: 25
            }]}>Unique Point Selling</Text>
            <View style={styles.action}>
                <TextInput 
                    placeholder="Spesification"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => setSpesification(val)}
                />
            </View>
            <Text style={[styles.text_footer, {
                marginTop: 25
            }]}>Warranty</Text>
            <View style={styles.action}>
                <Picker 
                    selectedValue={warrantyId}
                    style={styles.dropdown} 
                    onValueChange={(val) => setWarrantyId(val)}>
                    <Picker.Item label="Select Warranty" value="" />
                    <Picker.Item label="-" value="1" />
                    <Picker.Item label="Garansi International" value="2" />
                    <Picker.Item label="Garansi Resmi" value="3" />
                    <Picker.Item label="Garansi Distributor" value="4" />
                    <Picker.Item label="Garansi Toko" value="5" />
                    
                </Picker>
            </View>
            <Text style={[styles.text_footer, {
                marginTop: 25
            }]}>Period</Text>
            <View style={styles.action}>
                <Picker 
                    selectedValue={periodId}
                    style={styles.dropdown} 
                    onValueChange={(val) => setPeriodId(val)}>
                    <Picker.Item label="Select Period" value="1" />
                    <Picker.Item label="-" value="1" />
                    <Picker.Item label="10 Tahun" value="2" />
                    <Picker.Item label="18 Bulan" value="3" />
                    <Picker.Item label="1 Bulan" value="4" />
                    <Picker.Item label="1 Tahun" value="5" />
                    <Picker.Item label="2 Tahun" value="6" />
                    <Picker.Item label="3 Tahun" value="7" />
                    <Picker.Item label="4 Tahun" value="8" />
                    <Picker.Item label="5 Tahun" value="9" />
                    <Picker.Item label="6 Bulan" value="10" />
                    <Picker.Item label="15 Bulan" value="11" />
                    <Picker.Item label="8 Tahun" value="12" />
                    <Picker.Item label="9 Tahun" value="13" />
                    <Picker.Item label="Lifetime Warranty" value="14" />
                    <Picker.Item label="2x24 jam" value="15" />
                    <Picker.Item label="7 hari" value="16" />
                </Picker>
            </View>
            {/* <Text style={[styles.text_footer, {
                marginTop: 25
            }]}>Date</Text>
            <View>
            <View>
                <Button onPress={showDatepicker} title="Today" />
            </View>
            {show && (
                <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={onChange}
                />
            )}
            </View> */}
            <Text style={[styles.text_footer, {
                marginTop: 25
            }]}>Notes</Text>
            <View style={styles.action}>
                <TextInput 
                    placeholder="Optional"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => setNotes(val)}
                />
            </View>
            <View style={styles.button}>
                <TouchableOpacity
                    style={styles.signIn}
                    onPress={() => saveData()}
                >
                <LinearGradient
                    colors={['#2431a8', '#3f4fe8']}
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Save Product</Text>
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

export default AddProductScreen;

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