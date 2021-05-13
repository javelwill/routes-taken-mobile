import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { AccountNavigator } from './account.navigator'
import { AppNavigator } from './app.navigator'

export const Navigation = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  )
}
