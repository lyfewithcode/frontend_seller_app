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
import { useTheme } from '@react-navigation/native';
import {Picker} from '@react-native-community/picker';
import LinearGradient from 'react-native-linear-gradient';
import DateTimePicker from '@react-native-community/datetimepicker';
import {urlEmulator, urlDevice} from './url';
import Axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const UpdateProductScreen = ({navigation, route}) => {

  const { colors } = useTheme();
  
  const [idProduct, setIdProduct] = useState('');
  const [nameProduct, setNameProduct] = useState('');
  const [categoryId, setCategoryId] = useState(0);
  const [priceProduct, setPriceProduct] = useState("");
  const [spesification, setSpesification] = useState('');
  const [warrantyId, setWarrantyId] = useState(0);
  const [notes, setNotes] = useState('');
  const [periodId, setPeriodId] = useState(0);
  const [stockProduct, setStock] = useState(0);
  const theme = useTheme();

  useEffect(() => {
    const {product_id} = route.params
    setIdProduct(product_id)
    const getDataProduct = async () => {
        let url = urlEmulator
        await Axios.get(url + "/product/" + product_id)
        .then(res => {
            console.log(res.data.data.price)
            if(res.data.status == 200) {
                setNameProduct(res.data.data.product_name)
                setCategoryId(res.data.data.category_id)
                setPriceProduct(res.data.data.price)
                setSpesification(res.data.data.spesification)
                setWarrantyId(res.data.data.warranty_id)
                setNotes(res.data.data.notes)
                setPeriodId(res.data.data.period_id)
                setStock(res.data.data.stock)
            }
        })
    }
    getDataProduct()
  }, [route.params])


  const saveData = async () => {
    let dataProduct = {
        product_name : nameProduct,
        category_id : categoryId,
        price : priceProduct,
        spesification : spesification,
        warranty_id : warrantyId,
        notes : notes,
        period_id : periodId,
        stock : stockProduct
    }
    let token = await AsyncStorage.getItem('userToken');
    let url = urlEmulator; // untuk emulator
    await Axios.put(url + "/product/" + idProduct, dataProduct, {headers : {
      Authorization : token
    }})
    .then(res => {
      if(res.data.status == 200) {
          Alert.alert("Success", "Update product success")
          navigation.navigate("ProductScreen")
      }else{
          Alert.alert("Failed", "Update product failed")
      }

    })
    .catch(err => {
      Alert.alert("Failed", "failed update product error : " + err )
    })
}

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='#2431a8' barStyle="light-content"/>
        <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
            <Appbar.Content
                title="Update Product"
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
                    value={nameProduct}
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
                    value={"" + priceProduct}
                    onChangeText={(val) => setPriceProduct(val)}
                />
            </View>
            <Text style={[styles.text_footer, {
                marginTop: 25
            }]}>Category</Text>
            <View style={styles.action}>
                <Picker
                    selectedValue={""+categoryId} 
                    style={styles.dropdown}
                    onValueChange={(val, id) => setCategoryId(val)}>
                    <Picker.Item label="Select Category " value="" />
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
                    value={""+stockProduct}
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
                    value={spesification}
                    onChangeText={(val) => setSpesification(val)}
                />
            </View>
            <Text style={[styles.text_footer, {
                marginTop: 25
            }]}>Warranty</Text>
            <View style={styles.action}>
                <Picker style={styles.dropdown} selectedValue={""+warrantyId}>
                <Picker.Item label="Select Warranty" value="" />
                    <Picker.Item label="Garansi International" value="1" />
                    <Picker.Item label="Garansi Resmi" value="2" />
                    <Picker.Item label="Garansi Distributor" value="3" />
                    <Picker.Item label="Garansi Toko" value="4" />
                    <Picker.Item label="-" value="5" />
                </Picker>
            </View>
            <Text style={[styles.text_footer, {
                marginTop: 25
            }]}>Period</Text>
            <View style={styles.action}>
                <Picker style={styles.dropdown} selectedValue={""+periodId}>
                    <Picker.Item label="-" value="1" />
                    <Picker.Item label="10 Tahun" value="2" />
                    <Picker.Item label="18 Bulan" value="3" />
                    <Picker.Item label="1 Bulan" value="4" />
                    <Picker.Item label="1 Tahun" value="5" />
                    <Picker.Item label="2 Tahun" value="6" />
                    <Picker.Item label="3 Tahun" value="7" />
                    <Picker.Item label="4 Tahun" value="2" />
                    <Picker.Item label="5 Tahun" value="3" />
                    <Picker.Item label="6 Bulan" value="4" />
                    <Picker.Item label="15 Bulan" value="5" />
                    <Picker.Item label="8 Tahun" value="6" />
                    <Picker.Item label="9 Tahun" value="7" />
                    <Picker.Item label="Lifetime Warranty" value="5" />
                    <Picker.Item label="2x24 jam" value="6" />
                    <Picker.Item label="7 hari" value="7" />
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
                    value={notes}
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

export default UpdateProductScreen;

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