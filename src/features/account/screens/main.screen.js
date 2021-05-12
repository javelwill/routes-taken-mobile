import React from 'react'
import { SafeAreaView, Text, Button } from 'react-native'

export const MainScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text>MainScreen</Text>
      <Button
        title="Go to SigninScreen"
        onPress={() => navigation.navigate('Signin')}
      />
      <Button
        title="Go to SignupScreen"
        onPress={() => navigation.navigate('Signup')}
      />
    </SafeAreaView>
  )
}
