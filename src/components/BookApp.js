import {View, Text, FlatList, TextInput, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import store_data from '../store_data.json';
import BookStore from './BookStore/BookStore';

export default function BookApp() {
  const renderBooks = ({item}) => <BookStore books={item} />;
  return (
    <View>
      <ScrollView>
        <Text style={styles.headerStyle}> Morvi Kitap Mağazası</Text>
        <Text style={[{fontSize: 18}, {color: 'black'}, {textAlign: 'center'}]}>
          Hoş Geldiniz!
        </Text>
        <TextInput  style={styles.search_input} placeholder="Ara" />
        <FlatList
         keyExtractor={(item) => item.u_id}
         data={store_data} 
         renderItem={renderBooks} />
      </ScrollView>
    </View>
  );
}

export const styles = StyleSheet.create({
  search_input: {
    height: 40,
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#ECF9FF',
  },
  headerStyle: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
  },
});
