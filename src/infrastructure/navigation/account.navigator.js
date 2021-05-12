import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { MainScreen } from '../../features/account/screens/main.screen'
import { SigninScreen } from '../../features/account/screens/signin.screen'
import { SignupScreen } from '../../features/account/screens/signup.screen'

const Stack = createStackNavigator()

export const AccountNavigator = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Main" component={MainScreen} />
    <Stack.Screen name="Signin" component={SigninScreen} />
    <Stack.Screen name="Signup" component={SignupScreen} />
  </Stack.Navigator>
)
