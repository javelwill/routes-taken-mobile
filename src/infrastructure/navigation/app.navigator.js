import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { RoutesNavigator } from './routes.navigator'
import { RouteCreateScreen } from '../../features/routes/screens/route-create.screen'
import { SettingsNavigator } from './settings.navigator'

const Tab = createBottomTabNavigator()

export const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Routes" component={RoutesNavigator} />
    <Tab.Screen name="RouteCreate" component={RouteCreateScreen} />
    <Tab.Screen name="Settings" component={SettingsNavigator} />
  </Tab.Navigator>
)
