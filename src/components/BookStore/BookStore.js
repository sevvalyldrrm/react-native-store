import {View, Text, Image, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import React from 'react';
import {bookStoreStyle} from './BookStoreStyle';

export default function BookStore({books}) {
  return (
    <View style={bookStoreStyle.container}>
      <Image style={bookStoreStyle.image} source={{uri: books.imageUrl}} />
      <View>
        <Text style={bookStoreStyle.title}>{books.title}</Text>
        <Text style={bookStoreStyle.author}>{books.author}</Text>
        <Text style={bookStoreStyle.price}>{books.price}</Text>
        <TouchableOpacity style={styles.buttonStyle}
        onPress={() => Alert.alert('Sepete Eklendi')}>
          <Text style={styles.buttonText}>Sepete Ekle</Text>
        </TouchableOpacity>
        <Text style={bookStoreStyle.inStock}>
          {books.inStock ? ' ' : 'STOK YOK'}
        </Text>
      </View>
    </View>
  );
}


export const styles = StyleSheet.create({
  buttonStyle: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    alignItems: 'center'
  },

  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
});