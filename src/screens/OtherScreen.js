import React from 'react'
import { Text, View, Dimensions } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import * as d3 from 'd3'
import Svg, { Line } from 'react-native-svg'
import { Surface, Group, Shape } from '@react-native-community/art'

const deviceHeight = Dimensions.get('window').height
const deviceWidth = Dimensions.get('window').width

// const data = [
//   {date: new Date(2019, 1,1 ), value: 83.24},
//   {date: new Date(2019, 2,1 ), value: 88.24},
//   {date: new Date(2019, 3,1 ), value: 87.24},
//   {date: new Date(2019, 4,1 ), value: 81.24},
//   {date: new Date(2019, 5,1 ), value: 86.24},
//   {date: new Date(2019, 6,1 ), value: 82.24},
//   {date: new Date(2019, 7,1 ), value: 87.24},
// ];

//  const y = d3.scaleLinear().domain([0, 100]).range([0, deviceHeight]);

//  const x = d3.scaleTime().domain([new Date(2019, 1,1 ), new Date(2019, 7, 1)]).range([0, deviceWidth]);

// // Create our line generator.
// const line = d3.line()
//   // For every x value create the x accessor,
//   // which uses our x scale function.
//   .x(function(d) { return x(d.date); })
//   // Make our y accessor.
//   .y(function(d) { return y(d.value); });
// Our array of data we're graphing.
const data = [
  { date: new Date(2000, 1, 1), value: 83.24 },
  { date: new Date(2000, 1, 2), value: 85.35 },
  { date: new Date(2000, 1, 3), value: 98.84 },
  { date: new Date(2000, 1, 4), value: 79.92 },
  { date: new Date(2000, 1, 5), value: 83.8 },
  { date: new Date(2000, 1, 6), value: 88.47 },
  { date: new Date(2000, 1, 7), value: 94.47 }
]

// Create our x-scale.
const x = d3
  .scaleTime()
  // Our domain is now a week of time.
  .domain([new Date(2000, 0, 1), new Date(2000, 0, 8)])
  // That we're going to show on our screen which is also 640 pixels wide.
  .range([0, 360])

const y = d3
  .scaleLinear()
  // Set our domain, which is our input data, which is our test scores,
  // which can be between 0 and 100.
  .domain([0, 100])
  // Set our range, which is our output data, which is the height of our
  // screen, which is 640 pixels.
  .range([0, 640])

// Create our line generator.
const line = d3
  .line()
  // For every x value create the x accessor,
  // which uses our x scale function.
  .x(function (d) {
    return x(d.date)
  })
  // Make our y accessor.
  .y(function (d) {
    return y(d.value)
  })
console.log('====================================');
console.log(line(data));
console.log('====================================');
export default class OtherScreen extends React.Component {

  render () {

    return (
      <View style={styles.container}>
        <Text>Other Screen</Text>
        <Surface width={500} height={500}>
          <Group x={100} y={0}>
            <Shape d={line(data)} stroke='#000' strokeWidth={1} />
          </Group>
        </Surface>
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
