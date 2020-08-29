import React, { useState } from "react";
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';
import { DataTable } from 'react-native-paper';
import { useTheme } from '@react-navigation/native';

const HomeScreen = ({navigation}) => {

  const { colors } = useTheme();

  const theme = useTheme();

    return (
      <View style={styles.container}>
        <StatusBar barStyle= { theme.dark ? "light-content" : "dark-content" }/>
        <Text style={{color: colors.text, fontSize: 20, fontWeight: 'bold', paddingLeft: 15, paddingTop: 20, paddingBottom: 5}}>RECENT</Text>

    <DataTable>
        <DataTable.Header>
          <DataTable.Title>PRODUCT ADDED</DataTable.Title>
          <DataTable.Title numeric>PRICE</DataTable.Title>
          <DataTable.Title numeric>STOCK</DataTable.Title>
        </DataTable.Header>

        <DataTable.Row>
          <DataTable.Cell>Samsung Galaxy A51 - 6/128</DataTable.Cell>
          <DataTable.Cell numeric>4299000</DataTable.Cell>
          <DataTable.Cell numeric>2 Available</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>Samsung Galaxy A71 - 8/128</DataTable.Cell>
          <DataTable.Cell numeric>6499000</DataTable.Cell>
          <DataTable.Cell numeric>2 Available</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Pagination
          page={1}
          numberOfPages={3}
          onPageChange={page => {
            console.log(page);
          }}
          label="1-2 of 6"
        />
      </DataTable>

      <DataTable>
        <DataTable.Header>
          <DataTable.Title>SALES</DataTable.Title>
          <DataTable.Title numeric>PRICE</DataTable.Title>
        </DataTable.Header>

        <DataTable.Row>
          <DataTable.Cell>Samsung Galaxy A51 - 6/128</DataTable.Cell>
          <DataTable.Cell numeric>4299000</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>Samsung Galaxy A71 - 8/128</DataTable.Cell>
          <DataTable.Cell numeric>6499000</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Pagination
          page={1}
          numberOfPages={3}
          onPageChange={page => {
            console.log(page);
          }}
          label="1-2 of 6"
        />
      </DataTable>
      <Text style={{color: colors.text, fontSize: 20, fontWeight: 'bold', paddingLeft: 15, paddingTop: 20, paddingBottom: 5}}>SUMMARY</Text>

    <DataTable>
        <DataTable.Header>
          <DataTable.Title>OUT OF STOCK</DataTable.Title>
          <DataTable.Title numeric>PRICE</DataTable.Title>
          <DataTable.Title numeric>STOCK</DataTable.Title>
        </DataTable.Header>

        <DataTable.Row>
          <DataTable.Cell>Samsung Galaxy A51 - 6/128</DataTable.Cell>
          <DataTable.Cell numeric>4299000</DataTable.Cell>
          <DataTable.Cell numeric>Not Available</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>Samsung Galaxy A71 - 8/128</DataTable.Cell>
          <DataTable.Cell numeric>6499000</DataTable.Cell>
          <DataTable.Cell numeric>Not Available</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Pagination
          page={1}
          numberOfPages={3}
          onPageChange={page => {
            console.log(page);
          }}
          label="1-2 of 6"
        />
      </DataTable>
      </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#fff'
  }
});
