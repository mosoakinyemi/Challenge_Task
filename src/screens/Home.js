import React from 'react'
import { Text, View, FlatList } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import { LineChart } from 'react-native-chart-kit'
import Svg, { Circle } from 'react-native-svg'
import HistoryCard, { green } from '../components/HistoryCard'
import DummyData from '../components/data.js'
// import Icon from '../components/Icon'

export default class Home extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.topHalf}>
          <View style={styles.textBlocks}>
            <Text style={styles.availableText}>AVAILABLE BALANCE</Text>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={styles.nairaContainer}>
                <Text style={styles.nairaSign}>{'\u20a6'}</Text>
              </View>

              <View style={styles.balanceTextContainer}>
                <Text style={styles.balanceText}>547,916</Text>
                <Text style={styles.balanceSubText}>.15</Text>
              </View>
            </View>

            <Text style={styles.totalBalanceText}>My Total Balance: NGN 10,610,918.25</Text>

            <View />
          </View>
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
          showsVerticalScrollIndicator={false}
          style={styles.historyCardsContainer}
          data={DummyData}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    )
  }
  _renderItem = ({ item, index }) => (
    <HistoryCard
      key={index}
      historyData={item}
      index={index}
      onPressItem={this._onPressItem}
    />
  )

  _keyExtractor = (item, index) => index
}

const styles = EStyleSheet.create({
  nairaSign: {
    color: '#1f3f66',
    fontSize: '18rem',
    fontWeight: 'bold'
  },
  balanceTextContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginLeft: '10rem'
  },
  balanceSubText: {
    color: '#1f3f66',
    fontSize: '27rem',
    fontWeight: 'bold'
  },
  totalBalanceText: {
    color: '#61c979',
    marginTop: '10rem'
  },
  balanceText: {
    color: '#1f3f66',
    fontSize: '30rem',
    fontWeight: 'bold'
  },
  availableText: {
    color: '#8b8c99',
    fontWeight: 'bold',
    fontSize: '12rem',
    marginTop: '12rem'
  },
  textBlocks: {
    marginBottom: '40rem',
    width: '100%',
    alignItems: 'center'
  },
  nairaContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '30rem',
    width: '30rem',
    borderRadius: '25rem',
    backgroundColor: '#d3e2e7'
  },
  historyCardsContainer: {
    flex: 1,
    margin: '10rem'
  },
  recentTransactionText: {
    fontSize: '13rem',
    fontWeight: 'bold'
  },
  recentTransactionContainer: {
    width: '100%',
    paddingVertical: '15rem',
    backgroundColor: 'white',
    borderBottomWidth: '1rem',
    borderBottomColor: '#c4c4c4',
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
