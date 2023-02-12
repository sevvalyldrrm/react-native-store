import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import BookApp from './components/BookApp'

export default function App() {
  return (
    <View style={styles.container}>
      <BookApp />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0EEED'
  }
})