import React from 'react'
import {
  StyleSheet,
  StatusBar as RNStatusBar,
  SafeAreaView,
  View,
} from 'react-native'

const StatusBar = () => <View style={styles.statusBar}></View>

export const SafeArea = ({ children }) => (
  <SafeAreaView style={styles.safeArea}>
    <StatusBar />
    {children}
  </SafeAreaView>
)

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  statusBar: {
    height: RNStatusBar.currentHeight ?? 0,
    backgroundColor: '#FFFFFF',
  },
})
