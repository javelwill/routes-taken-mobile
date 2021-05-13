import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { AccountNavigator } from './account.navigator'
import { RoutesNavigator } from './routes.navigator'

export const Navigation = () => {
  return (
    <NavigationContainer>
      <RoutesNavigator />
    </NavigationContainer>
  )
}
