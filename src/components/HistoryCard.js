import React from 'react'
import { Text, View } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import Icon from './Icon'

export const darkText = '#212337'
const feintGreen = '#d3f0e8'
export const green = '#31be57'
const feintOrange = '#f7e7e3'
const orange = '#ed7136'
const feintPurple = '#e6e5f3'
const purple = '#7670c6'

const getColor = index => {
  switch (index) {
    case 0:
      return green
    case 1:
      return orange
    case 2:
      return purple
    default:
      return green
  }
}

const HistoryCard = props => {
  const { type, title, price, date } = props.historyData

  return (
    <View style={styles.cardContainer}>
      <Icon name='pulse' color={getColor(props.index)} size={EStyleSheet.value('20rem')} />
      <View style={styles.cardBody}>
        <View style={styles.row}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.price}>NGN{price}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.date}>{date}</Text>
          <View
            style={[styles.typeContainer, { backgroundColor: getBackground(props.index) }]}
          >
            <Text style={[styles.type, { color: getColor(props.index) }]}>
              {type.toUpperCase()}
            </Text>
          </View>
        </View>
      </View>
    </View>
  )
}
const getBackground = index => {
  switch (index) {
    case 0:
      return feintGreen
    case 1:
      return feintOrange
    case 2:
      return feintPurple
    default:
      return feintGreen
  }
}
export default HistoryCard

const styles = EStyleSheet.create({
  type: {
    fontSize: '11rem',
    fontWeight: 'bold'
  },
  date: {
    fontWeight: 'bold',
    color: '#8b8c99'
  },
  title: {
    fontWeight: 'bold',
    color: darkText
  },
  price: {
    fontWeight: 'bold',
    color: darkText
  },
  typeContainer: {
    paddingVertical: '5rem',
    paddingHorizontal: '8rem',
    borderRadius: '5rem'
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  cardBody: {
    flex: 1,
    height: '100%',
    justifyContent: 'space-evenly',
    marginLeft: '12rem'
  },
  cardContainer: {
    borderRadius: '8rem',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    backgroundColor: '#f6f6f9',
    height: '70rem',
    marginBottom: '10rem',
    paddingHorizontal: '15rem'
  }
})
