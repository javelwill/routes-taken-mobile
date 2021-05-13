import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { RouteListScreen } from '../../features/routes/screens/route-list.screen'
import { RouteDetailScreen } from '../../features/routes/screens/route-detail.screen'

const Stack = createStackNavigator()

export const RoutesNavigator = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="RouteList" component={RouteListScreen} />
    <Stack.Screen name="RouteDetail" component={RouteDetailScreen} />
  </Stack.Navigator>
)
