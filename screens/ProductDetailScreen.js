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
import { Appbar, Card, Avatar, IconButton } from 'react-native-paper';
import { useTheme } from '@react-navigation/native';
import {urlEmulator, urlDevice} from './url';
import Axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const ProductDetailScreen = ({navigation, route}) => {

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

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='#2431a8' barStyle="light-content"/>
        <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
            <Appbar.Content
                title="Product Detail"
                // subtitle="Subtitle"
                />
        </Appbar.Header>
        <View 
            style={styles.footer}
        >
        <ScrollView>
        <Card style={{marginBottom: 10}}>
            <Card.Title
            title={nameProduct}
            subtitle={priceProduct}
            left={(props) => <Avatar.Icon {...props} icon="folder" />}
        />
        <View style={{flexDirection: 'row', paddingBottom: 15}}>
            <Text style={{color: '#05375a', paddingLeft: 72, fontWeight: 'bold'}}>{stockProduct !== null || stockProduct !== null ? stockProduct : "Not"} Available</Text>
        </View>
        <View style={{flexDirection: 'row', paddingBottom: 15}}>
            <Text style={{color: '#05375a', paddingLeft: 72, fontWeight: 'bold'}}>Category: {categoryId}</Text>
        </View>
        <View style={{flexDirection: 'row', paddingBottom: 15}}>
            <Text style={{color: '#05375a', paddingLeft: 72, fontWeight: 'bold'}}>Stock: {stockProduct}</Text>
        </View>
        <View style={{flexDirection: 'row', paddingBottom: 15}}>
            <Text style={{color: '#05375a', paddingLeft: 72, fontWeight: 'bold'}}>Unique Point Selling: {spesification}</Text>
        </View>
        <View style={{flexDirection: 'row', paddingBottom: 15}}>
            <Text style={{color: '#05375a', paddingLeft: 72, fontWeight: 'bold'}}>Warranty: {warrantyId}</Text>
        </View>
        <View style={{flexDirection: 'row', paddingBottom: 15}}>
            <Text style={{color: '#05375a', paddingLeft: 72, fontWeight: 'bold'}}>Period: {periodId}</Text>
        </View>
        <View style={{flexDirection: 'row', paddingBottom: 15}}>
            <Text style={{color: '#05375a', paddingLeft: 72, fontWeight: 'bold'}}>Notes: {notes} {(val) => setNotes(val)}</Text>
        </View>
        </Card>
        </ScrollView>
        </View>
        </View>
    );
  };

export default ProductDetailScreen;

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
      backgroundColor: '#fff'      
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