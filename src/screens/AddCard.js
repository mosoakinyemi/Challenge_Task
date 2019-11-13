import React from 'react'
import { Text, View, ImageBackground, Button } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import Icon from '../components/Icon'

export default class AddCard extends React.Component {
  static navigationOptions = {
    title: 'Add Card',
    headerTintColor: '#505050',
    headerStyle: {
      backgroundColor: 'white'
    }
  }

  state = {
    cardNumber: null
  }

  render () {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.card}
          resizeMode='cover'
          source={require('../assets/images/CardGradient.jpg')}
        >
          <View style={styles.chipAndLogo}>
            <Icon
              name='chip'
              color='orange'
              size={EStyleSheet.value('30rem')}
            />
            <Icon
              name='mastero'
              color='#f4f4f4'
              size={EStyleSheet.value('20rem')}
            />
          </View>
          <Text style={styles.cardNumberTitle}>CARD NUMBER</Text>
          <Text style={styles.cardNumberText}>
            {this.state.cardNumber || '4231 2382 98239 8398'}
          </Text>
          <Text style={styles.cardNumberTitle}>VALID THRU</Text>
          <Text style={styles.cardNumberText}>
            {this.state.cardExpiry || '10/12'}
          </Text>
        </ImageBackground>

        <View>
          <Button
            title='Go'
            onPress={() => this.props.navigation.navigate('Dashboard')}
          />
        </View>
      </View>
    )
  }
}

const styles = EStyleSheet.create({
  cardNumberText: {
    color: 'rgba(255,255,255,0.85)',
    fontSize: '11rem'
  },
  chipAndLogo: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  card: {
    width: '320rem',
    height: '200rem',
    padding: '15rem',
    borderRadius: '10rem',
    overflow: 'hidden'
  },
  cardNumberTitle: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: '11rem',
    marginBottom: '15rem',
    marginTop: '12rem'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    paddingTop: '25rem'
  }
})
