import React from 'react'
import { Text, Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

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
