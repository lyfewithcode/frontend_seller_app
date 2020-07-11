import React,{useState} from 'react';
import { 
    View, 
    Text,
    Image, 
    TouchableOpacity, 
    Platform,
    StyleSheet,
    ScrollView,
    StatusBar,
    List
} from 'react-native';

import { Card, Avatar, IconButton } from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useTheme } from '@react-navigation/native';

const ProductScreen = ({navigation}) => {
    
  const { colors } = useTheme();

  const theme = useTheme();

  const state = {
    searchQuery: '',
  };
    
    return (
        <View style={styles.container}>
        <StatusBar backgroundColor='#008adc' barStyle="light-content"/>
        <View 
            style={styles.footer}
        >
        <ScrollView>
        <Card style={{marginBottom: 10}} onPress={() => navigation.navigate("TransactionDetailScreen")}>
            <Card.Title
            title="Oppo A5 2020 Smartphone"
            subtitle="Rp 2,199,000"
            left={(props) => <Avatar.Icon {...props} icon="folder" />}
            right={(props) => <IconButton {...props} icon="more" onPress={() => navigation.navigate("TransactionDetailScreen")} />}
        />
        <View style={{flexDirection: 'row', paddingBottom: 15}}>
            <Text style={{color: '#05375a', paddingLeft: 72, fontWeight: 'bold'}}>20 Available</Text>
        </View>
        </Card>
        <Card style={{marginBottom: 10}} onPress={() => navigation.navigate("TransactionDetailScreen")}>
            <Card.Title
            title="Oppo A5 2020 Smartphone"
            subtitle="Rp 2,199,000"
            left={(props) => <Avatar.Icon {...props} icon="folder" />}
            right={(props) => <IconButton {...props} icon="more" onPress={() => navigation.navigate("TransactionDetailScreen")} />}
        />
        <View style={{flexDirection: 'row', paddingBottom: 15}}>
            <Text style={{color: '#05375a', paddingLeft: 72, fontWeight: 'bold'}}>20 Available</Text>
        </View>
        </Card><Card style={{marginBottom: 10}} onPress={() => navigation.navigate("TransactionDetailScreen")}>
            <Card.Title
            title="Oppo A5 2020 Smartphone"
            subtitle="Rp 2,199,000"
            left={(props) => <Avatar.Icon {...props} icon="folder" />}
            right={(props) => <IconButton {...props} icon="more" onPress={() => navigation.navigate("TransactionDetailScreen")} />}
        />
        <View style={{flexDirection: 'row', paddingBottom: 15}}>
            <Text style={{color: '#05375a', paddingLeft: 72, fontWeight: 'bold'}}>20 Available</Text>
        </View>
        </Card><Card style={{marginBottom: 10}} onPress={() => navigation.navigate("TransactionDetailScreen")}>
            <Card.Title
            title="Oppo A5 2020 Smartphone"
            subtitle="Rp 2,199,000"
            left={(props) => <Avatar.Icon {...props} icon="folder" />}
            right={(props) => <IconButton {...props} icon="more" onPress={() => navigation.navigate("TransactionDetailScreen")} />}
        />
        <View style={{flexDirection: 'row', paddingBottom: 15}}>
            <Text style={{color: '#05375a', paddingLeft: 72, fontWeight: 'bold'}}>20 Available</Text>
        </View>
        </Card>
        <Card style={{marginBottom: 10}} onPress={() => navigation.navigate("TransactionDetailScreen")}>
            <Card.Title
            title="Oppo A5 2020 Smartphone"
            subtitle="Rp 2,199,000"
            left={(props) => <Avatar.Icon {...props} icon="folder" />}
            right={(props) => <IconButton {...props} icon="more" onPress={() => navigation.navigate("TransactionDetailScreen")} />}
        />
        <View style={{flexDirection: 'row', paddingBottom: 15}}>
            <Text style={{color: '#05375a', paddingLeft: 72, fontWeight: 'bold'}}>20 Available</Text>
        </View>
        </Card>
        <Card style={{marginBottom: 10}} onPress={() => navigation.navigate("TransactionDetailScreen")}>
            <Card.Title
            title="Oppo A5 2020 Smartphone"
            subtitle="Rp 2,199,000"
            left={(props) => <Avatar.Icon {...props} icon="folder" />}
            right={(props) => <IconButton {...props} icon="more" onPress={() => navigation.navigate("TransactionDetailScreen")} />}
        />
        <View style={{flexDirection: 'row', paddingBottom: 15}}>
            <Text style={{color: '#05375a', paddingLeft: 72, fontWeight: 'bold'}}>20 Available</Text>
        </View>
        </Card>
        <Card style={{marginBottom: 10}} onPress={() => navigation.navigate("TransactionDetailScreen")}>
            <Card.Title
            title="Oppo A5 2020 Smartphone"
            subtitle="Rp 2,199,000"
            left={(props) => <Avatar.Icon {...props} icon="folder" />}
            right={(props) => <IconButton {...props} icon="more" onPress={() => navigation.navigate("TransactionDetailScreen")} />}
        />
        <View style={{flexDirection: 'row', paddingBottom: 15}}>
            <Text style={{color: '#05375a', paddingLeft: 72, fontWeight: 'bold'}}>20 Available</Text>
        </View>
        </Card>
        
        <View style={{flexDirection: 'row', marginTop: 20, paddingBottom: 5}}>
            <FontAwesome 
                name="user-o"
                color="#05375a"
                size={20}
            />
            <Text style={{color: '#05375a', fontSize: 16, paddingLeft: 10, fontWeight: 'bold'}}>
                Oppo A5 2020 Smartphone - 4/64 GB
            </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 5, paddingBottom: 5}}>
            
            <Text style={{color: '#05375a', paddingLeft: 28, fontWeight: 'bold'}}>Rp 2,199,000</Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 5, borderBottomWidth: 1, borderBottomColor: '#f2f2f2', paddingBottom: 20}}>
            
            <Text style={{color: '#05375a', paddingLeft: 28}}>20 Available</Text>
        </View>

        <View style={{flexDirection: 'row', marginTop: 20, paddingBottom: 5}}>
            <FontAwesome 
                name="user-o"
                color="#05375a"
                size={20}
            />
            <Text style={{color: '#05375a', fontSize: 16, paddingLeft: 10, fontWeight: 'bold'}}>
                Oppo A5 2020 Smartphone - 4/64 GB
            </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 5, paddingBottom: 5}}>
            
            <Text style={{color: '#05375a', paddingLeft: 28, fontWeight: 'bold'}}>Rp 2,199,000</Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 5, borderBottomWidth: 1, borderBottomColor: '#f2f2f2', paddingBottom: 20}}>
            
            <Text style={{color: '#05375a', paddingLeft: 28}}>20 Available</Text>
        </View>

        <View style={{flexDirection: 'row', marginTop: 20, paddingBottom: 5}}>
            <FontAwesome 
                name="user-o"
                color="#05375a"
                size={20}
            />
            <Text style={{color: '#05375a', fontSize: 16, paddingLeft: 10, fontWeight: 'bold'}}>
                Oppo A5 2020 Smartphone - 4/64 GB
            </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 5, paddingBottom: 5}}>
            
            <Text style={{color: '#05375a', paddingLeft: 28, fontWeight: 'bold'}}>Rp 2,199,000</Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 5, borderBottomWidth: 1, borderBottomColor: '#f2f2f2', paddingBottom: 20}}>
            
            <Text style={{color: '#05375a', paddingLeft: 28}}>20 Available</Text>
        </View>

        <View style={{flexDirection: 'row', marginTop: 20, paddingBottom: 5}}>
            <FontAwesome 
                name="user-o"
                color="#05375a"
                size={20}
            />
            <Text style={{color: '#05375a', fontSize: 16, paddingLeft: 10, fontWeight: 'bold'}}>
                Oppo A5 2020 Smartphone - 4/64 GB
            </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 5, paddingBottom: 5}}>
            
            <Text style={{color: '#05375a', paddingLeft: 28, fontWeight: 'bold'}}>Rp 2,199,000</Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 5, borderBottomWidth: 1, borderBottomColor: '#f2f2f2', paddingBottom: 20}}>
            
            <Text style={{color: '#05375a', paddingLeft: 28}}>20 Available</Text>
        </View>

        <View style={{flexDirection: 'row', marginTop: 20, paddingBottom: 5}}>
            <FontAwesome 
                name="user-o"
                color="#05375a"
                size={20}
            />
            <Text style={{color: '#05375a', fontSize: 16, paddingLeft: 10, fontWeight: 'bold'}}>
                Oppo A5 2020 Smartphone - 4/64 GB
            </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 5, paddingBottom: 5}}>
            
            <Text style={{color: '#05375a', paddingLeft: 28, fontWeight: 'bold'}}>Rp 2,199,000</Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 5, borderBottomWidth: 1, borderBottomColor: '#f2f2f2', paddingBottom: 20}}>
            
            <Text style={{color: '#05375a', paddingLeft: 28}}>20 Available</Text>
        </View>

        
        </ScrollView>
            <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate("AddProductScreen")}
            style={styles.TouchableOpacityStyle}>
            <Image
                source={require('../assets/float-add-icon.png')}
                style={styles.FloatingButtonStyle}
            />
            </TouchableOpacity>
        </View>
    </View>
    );
};

export default ProductScreen;

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
  });