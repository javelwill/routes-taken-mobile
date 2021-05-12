import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { AccountNavigator } from './account.navigator'

export const Navigation = () => {
  return (
    <NavigationContainer>
      <AccountNavigator />
    </NavigationContainer>
  )
}
