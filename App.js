import { StatusBar } from 'expo-status-bar'
import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import * as SplashScreen from 'expo-splash-screen'

export default function App() {
  const prepare = async () => {
    try {
      await SplashScreen.preventAutoHideAsync()
    } catch (err) {
      console.log(err.message)
    }
  }

  useEffect(() => {
    prepare()
  }, [])

  return (
    <View style={styles.container}>
      <Text>Wah Gwan!</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
