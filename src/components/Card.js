import React from 'react'
import { Text, View, ImageBackground } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import Icon from './Icon'

export default class Card extends React.PureComponent {
  render () {
    return (
      <ImageBackground
        style={[styles.card, this.props.style]}
        resizeMode='cover'
        source={require('../assets/images/CardGradient.jpg')}
      >
        <View style={styles.chipAndLogo}>
          <Icon name='chip' color='#ecd4be' size={EStyleSheet.value('30rem')} />
          <Icon name='mastero' color='#f4f4f4' size={EStyleSheet.value('30rem')} />
        </View>
        <Text style={styles.cardNumberTitle}>CARD NUMBER</Text>
        <Text style={styles.cardNumberText}>
          {this.props.cardNumber || '4231 2382 98239 8398'}
        </Text>
        <Text style={styles.cardNumberTitle}>VALID THRU</Text>
        <Text style={styles.cardNumberText}>{this.props.cardExpiry || '10/12'}</Text>
      </ImageBackground>
    )
  }
}

const styles = EStyleSheet.create({
  cardNumberText: {
    color: 'rgba(255,255,255,0.85)',
    fontSize: '12rem'
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
    fontSize: '12rem',
    marginBottom: '15rem',
    marginTop: '12rem'
  }
})
