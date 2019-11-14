import React from 'react'
import { Text, View, Dimensions } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

const deviceHeight = Dimensions.get('window').height
const deviceWidth = Dimensions.get('window').width

export default class OtherScreen extends React.Component {
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
