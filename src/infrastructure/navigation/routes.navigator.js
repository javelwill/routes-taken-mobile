import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { RoutesScreen } from '../../features/routes/screens/routes.screen'
import { RouteDetailScreen } from '../../features/routes/screens/route-detail.screen'

const Stack = createStackNavigator()

export const RoutesNavigator = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Routes" component={RoutesScreen} />
    <Stack.Screen name="RouteDetail" component={RouteDetailScreen} />
  </Stack.Navigator>
)
