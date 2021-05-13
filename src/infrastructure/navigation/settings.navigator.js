import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { SettingsScreen } from '../../features/settings/screen/settings.screen'

const Stack = createStackNavigator()

export const SettingsNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Settings" component={SettingsScreen} />
  </Stack.Navigator>
)
