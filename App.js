import React from 'react'
import { Text, View, Dimensions, ActivityIndicator } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import { Index } from './src/screens/Index'

const entireScreenWidth = Dimensions.get('window').width
const entireScreenHeight = Dimensions.get('window').height

EStyleSheet.build({
  $rem: entireScreenWidth / 380,
  $green: '#38C172',
  $dw: entireScreenWidth,
  $dh: entireScreenHeight,
  $green: 'limegreen',
  $darkGreen: 'darkGreen'
})

export default class App extends React.Component {
  render () {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <Index />
      </View>
    )
  }
}
