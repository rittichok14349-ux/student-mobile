import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';
import profile from './profile';



export default function index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Examp this days</Text>
      <Link href="/hello" style={styles.link}>1. Hello Word</Link>
      <Link href="/counter" style={styles.link}>2.Counter (useState) </Link>
      <Link href="/greet" style={styles.link}>3.Greet (Textlnput)</Link>
      <Link href="/studentlist" style={styles.link}>4.Student List (FlatList)</Link>
      <Link href="/Student" style={styles.link}>5.Student จาก API</Link>
      <Link href="/profile" style={styles.link}>6.Profile</Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 12
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBlock: 4,
  },
  link: {
    backgroundColor: "#2563eb",
    color: "#fff",
    fontSize: 18,
    padding: 16,
    borderRadius: 12,
  }
})

