import React from 'react'
import { Text, Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export const RouteListScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text>RouteListScreen</Text>
      <Button
        title="Go to RouteDetailScreen"
        onPress={() => navigation.navigate('RouteDetail')}
      />
    </SafeAreaView>
  )
}
