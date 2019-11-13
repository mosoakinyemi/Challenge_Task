import React from 'react'
import { Text, View, Image } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import { LineChart } from 'react-native-chart-kit'
import Svg, { Circle } from 'react-native-svg'
import HistoryCard from '../components/HistoryCard'

export default class Home extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.topHalf}>
          <Svg>
            <LineChart
              data={{
                datasets: [
                  {
                    data: [19, 15, 14, 10, 19, 14, 17, 19]
                  }
                ]
              }}
              fromZero
              width={480} // from react-native
              height={100}
              withVerticalLabels={false}
              withHorizontalLabels={false}
              withInnerLines={false}
              withOuterLines={false}
              chartConfig={{
                backgroundColor: '#eaf5f6',
                backgroundGradientFrom: '#eaf5f6',
                backgroundGradientTo: '#eaf5f6',
                fillShadowGradient: '#2c5Ef0',
                fillShadowGradientOpacity: 1,

                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => '#2c5Ef0',
                style: {
                  borderRadius: 16
                },
                propsForDots: {
                  r: '4',
                  strokeWidth: '2.5',
                  stroke: '#fff'
                }
              }}
              bezier
              style={{
                borderRadius: 16
              }}
            />
            {/* <Circle
              cx={200}
              cy={`-${800 - 50 + 2}`}
              r='800'
              fill='green'
              stroke='#C5CACD'
              strokeWidth='2'
            /> */}
          </Svg>
        </View>
        <View style={styles.recentTransactionContainer}>
          <Text style={styles.recentTransactionText}>RECENT TRANSACTIONS</Text>
        </View>

        {/* History Cards Container */}
        <FlatList
          style={styles.historyCardsContainer}
          data={Days}
          extraData={this.state}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem2}
        />
      </View>
    )
  }
}

const styles = EStyleSheet.create({
  historyCardsContainer: {
    flex: 1,
    margin: '10rem'
  },
  recentTransactionText: {
    fontSize: '14rem',
    fontWeight: 'bold'
  },
  recentTransactionContainer: {
    width: '100%',
    paddingVertical: '15rem',
    backgroundColor: 'white',
    borderBottomWidth: '1rem',
    borderBottomColor: '#909090',
    justifyContent: 'center',
    alignItems: 'center'
  },
  topHalf: {
    width: '100%',
    backgroundColor: '#eaf5f6',
    height: '50%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    overflow: 'hidden'
  },
  container: {
    flex: 1,
    alignItems: 'center'
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 24
  }
})
