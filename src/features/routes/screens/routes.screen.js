import React from 'react'
import { Text, Button } from 'react-native'
import { SafeArea } from '../../../components/utility/safe-area.component'

export const RoutesScreen = ({ navigation }) => {
  return (
    <SafeArea>
      <Text>RoutesScreen</Text>
      <Button
        title="Go to RouteDetailScreen"
        onPress={() => navigation.navigate('RouteDetail')}
      />
    </SafeArea>
  )
}
