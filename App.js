import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'

import { SignUp } from './screens'

import Tabs from './navigation/tabs'

const theme = { 
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparent"
  }
}

const Stack = createStackNavigator();


const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false // so it would not show the header on the screen
        }}
        initialRouteName={'SignUp'} // so it would show the sign up screen on first load
      >
        <Stack.Screen name="SignUp" component={SignUp} />

        {/* Tabs */}
        <Stack.Screen 
          name='Home' component={Tabs}
         />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})