import React from 'react'
import {} from 'react-native'
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import MainScreen from './src/screens/MainScreen'
import UsingUseStateHooks from './src/screens/UsingUseStateHooks'
import InpWithoutHooks from './src/screens/InpWithoutHooks'

const navigator = createStackNavigator(
  {
    Main:MainScreen,
    state:UsingUseStateHooks,
    nothooks:InpWithoutHooks
  },
  {
    initialRouteName:'Main',
    defaultNavigationOptions:{
        title:'EgOfTakingUserInputs'
    }
  }
)

export default createAppContainer(navigator)