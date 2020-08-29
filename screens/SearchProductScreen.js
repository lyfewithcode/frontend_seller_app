import React from 'react';
import { 
    View, 
    Text,
    Image, 
    TouchableOpacity, 
    Platform,
    StyleSheet,
    ScrollView,
    StatusBar
} from 'react-native';
import { Appbar, Avatar, Searchbar, Card, IconButton } from 'react-native-paper';
import { useTheme } from '@react-navigation/native';

const SearchScreen = ({navigation}) => {

  const { colors } = useTheme();

  const theme = useTheme();

  const state = {
    searchQuery: '',
  };
    
    return (
        <View style={styles.container}>
        <StatusBar backgroundColor='#008adc' barStyle="light-content"/>
        <Appbar.Header>
        <Appbar.Action icon="arrow-left" onPress={() => navigation.goBack()} />
            <Searchbar style={{width: 360, height: 45, justifyContent: 'center', alignItems: 'center', borderRadius: 5, flexDirection: 'row', paddingRight: 40}}
            onPress={() => navigation.navigate("AddProductScreen")}
            placeholder="Search Product"
        />
        </Appbar.Header>
        <View 
            style={styles.footer}
        >
        <ScrollView>
        <Card>
            <Card.Title
            title="Oppo A5 2020 Smartphone"
            subtitle="Rp 2,199,000"
            left={(props) => <Avatar.Icon {...props} icon="folder" />}
        />
        <View style={{flexDirection: 'row', paddingBottom: 15}}>
            <Text style={{color: '#05375a', paddingLeft: 72, fontWeight: 'bold'}}>20 Available</Text>
        </View>
        </Card>
        <Card>
            <Card.Title
            title="Oppo A5 2020 Smartphone"
            subtitle="Rp 2,199,000"
            left={(props) => <Avatar.Icon {...props} icon="folder" />}
        />
        <View style={{flexDirection: 'row', paddingBottom: 15}}>
            <Text style={{color: '#05375a', paddingLeft: 72, fontWeight: 'bold'}}>20 Available</Text>
        </View>
        </Card>
        <Card>
            <Card.Title
            title="Oppo A5 2020 Smartphone"
            subtitle="Rp 2,199,000"
            left={(props) => <Avatar.Icon {...props} icon="folder" />}
        />
        <View style={{flexDirection: 'row', paddingBottom: 15}}>
            <Text style={{color: '#05375a', paddingLeft: 72, fontWeight: 'bold'}}>20 Available</Text>
        </View>
        </Card>
        </ScrollView>
        </View>
    </View>
    );
};

export default SearchScreen;

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