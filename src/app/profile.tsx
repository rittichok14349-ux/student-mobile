import { StyleSheet, Text, View, Pressable  } from 'react-native'
import React from 'react'

export default function profile() {
 return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Profile</Text>

        <Text style={styles.name}>นายฤทธิ์ธิโชค โสมล</Text>

        <Text style={styles.info}>รหัสนักศึกษา: 683190100008</Text>
        <Text style={styles.info}>สาขาวิชา: เทคโนโลยีสารสนเทศ</Text>

        <Text style={styles.subtitle}>ความสามารถ</Text>

        <Text style={styles.skill}>• HTML / CSS</Text>
        <Text style={styles.skill}>• JavaScript / React</Text>
        <Text style={styles.skill}>• Python / Database</Text>

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>ติดต่อ</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f1f5f9',
    padding: 20,
  },
  card: {
    width: '100%',
    backgroundColor: '#ffffff',
    padding: 24,
    borderRadius: 16,
    elevation: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2563eb',
    textAlign: 'center',
    marginBottom: 20,
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 12,
  },
  info: {
    fontSize: 16,
    color: '#475569',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2563eb',
    marginTop: 16,
    marginBottom: 10,
  },
  skill: {
    fontSize: 16,
    color: '#334155',
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#2563eb',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
})