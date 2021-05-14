import React, { useEffect, useState, useCallback } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { AccountNavigator } from './account.navigator'
import { AppNavigator } from './app.navigator'
import * as SplashScreen from 'expo-splash-screen'

export const Navigation = () => {
  const [isAppReady, setIsAppReady] = useState(false)
  const [isSignedIn, setIsSignedIn] = useState(false)

  useEffect(() => {
    const prepare = async () => {
      try {
        await SplashScreen.preventAutoHideAsync()
        const token = await new Promise((resolve, reject) => {
          setTimeout(() => resolve('token'), 3000)
        })
        if (token) {
          setIsSignedIn(true)
        }
      } catch (error) {
        console.warn(error.message)
      } finally {
        setIsAppReady(true)
      }
    }
    prepare()
  }, [])

  const onLayoutRootView = useCallback(async () => {
    if (isAppReady) {
      await SplashScreen.hideAsync()
    }
  }, [isAppReady])

  if (!isAppReady) {
    return null
  }

  return (
    <NavigationContainer onReady={onLayoutRootView}>
      {isSignedIn ? <AppNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  )
}
