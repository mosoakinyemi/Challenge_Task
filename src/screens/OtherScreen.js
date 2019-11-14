import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

export default class OtherScreen extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Other Screen</Text>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => this.props.navigation.navigate('AddCard')}
        >
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = EStyleSheet.create({
  backText: {
    color: 'white',
    // fontWeight: 'bold',
    fontSize: '20rem',
    marginRight: '30rem'
  },
  backButton: {
    height: '50rem',
    width: '320rem',
    backgroundColor: 'limegreen',
    borderRadius: '10rem',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: '20rem'
  },
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
