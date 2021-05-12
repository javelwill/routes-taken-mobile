import React from 'react'
import { Text, Button } from 'react-native'
import { SafeArea } from '../../../components/utility/safe-area.component'

export const MainScreen = ({ navigation }) => {
  return (
    <SafeArea>
      <Text>MainScreen</Text>
      <Button
        title="Go to SigninScreen"
        onPress={() => navigation.navigate('Signin')}
      />
      <Button
        title="Go to SignupScreen"
        onPress={() => navigation.navigate('Signup')}
      />
    </SafeArea>
  )
}
