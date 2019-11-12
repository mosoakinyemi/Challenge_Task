import React from 'react'
import { Text, View, Image } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

export default class Home extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>Other Screen</Text>
      </View>
    )
  }
}

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
