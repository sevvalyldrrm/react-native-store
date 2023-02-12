import { View, Text, Image } from 'react-native'
import React from 'react'
import { bookStoreStyle } from './BookStoreStyle'

export default function BookStore({books}) {
  return (
    <View   style={bookStoreStyle.container}>
      <Image style={bookStoreStyle.image}source={{uri: books.imageUrl}} />
      <View>
        <Text style={bookStoreStyle.title}>{books.title}</Text>
        <Text style={bookStoreStyle.author}>{books.author}</Text>
        <Text style={bookStoreStyle.price}>{books.price}</Text>
        <Text style={bookStoreStyle.inStock}>{books.inStock ? ' ' : 'STOK YOK' }</Text>

      </View>
    </View>
  )
}