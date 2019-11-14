import React from 'react'
import { Text, View, Dimensions } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import * as d3 from 'd3'
import Svg, { Line, Circle, Path,G ,Rect} from 'react-native-svg'
// import { Surface, Group, Shape, Path } from '@react-native-community/art'

const deviceHeight = Dimensions.get('window').height
const deviceWidth = Dimensions.get('window').width

 var data = d3.range(11).map(function(i){
  return {x: i, y: Math.sin(i)*3 + 5};
});
    var width = 360,
      height = 200,
      margin = 30,
    x = d3.scaleLinear()
    .domain([0, 10])
    .range([margin, width - margin]),
    y = d3.scaleLinear()
    .domain([0, 10])
    .range([height - margin, margin]);

    var line = d3.line()
    .x(function(d){return x(d.x);})
    .y(function(d){return y(d.y);})
    .curve(d3.curveMonotoneX); // <-A

        var area = d3.area()
            .x(function(d) { return x(d.x); })
            .y0(y(0))
            .y1(function(d) { return y(d.y); })
            .curve(d3.curveMonotoneX);


            
    //------New Settings----------
      // X scale point
      const xDomain = data.map(item => item.label)
      const xRange = [0, graphWidth]
      const x = d3.scalePoint()
        .domain(xDomain)
        .range(xRange)
        .padding(1)
  
      // Y scale linear
      const yDomain = [0, d3.max(data, d => d.value)]
      const yRange = [graphHeight,0]
      const y = d3.scaleLinear()
        .domain(yDomain)
        .range(yRange)

export default class OtherScreen extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>Other Screen</Text>
        <Svg width={360} height={500}>
          <Path
            d={area(data)}
            // d='M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80'
            stroke='blue'
            fill='rgba(180,180,255,0.5)'
            strokeWidth={2}
          />
            {/* <BarChart /> */}
          {this.renderDots()}
        </Svg>
      </View>
    )
  }
  renderDots () {
    return (
      <G>
        {data.map((item, index) => {
          return (
            <G>
            <Circle
              cx={x(item.x)}
              cy={y(item.y)}
              r={4.5}
              stroke='white'
              fill='red'
              strokeWidth={2}
            />
            <Line stroke="white" strokeWidth={4} x1={x(item.x)} y1={200} x2={x(item.x)} y2={y(item.y)+3}   />
            </G>
          )
        })}
      </G>
    )
  }  
}



const styles = EStyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})



const GRAPH_MARGIN = 20
const GRAPH_BAR_WIDTH = 5

const colors = {
  axis: '#E4E4E4',
  bars: '#15AD13'
}

const data2 = [
  { label: 'Jan', value: 500 },
  { label: 'Feb', value: 312 },
  { label: 'Mar', value: 424 },
  { label: 'Apr', value: 745 },
  { label: 'May', value: 89 },
  { label: 'Jun', value: 434 },
  { label: 'Jul', value: 650 },
  { label: 'Aug', value: 980 },
  { label: 'Sep', value: 123 },
  { label: 'Oct', value: 186 },
  { label: 'Nov', value: 689 },
  { label: 'Dec', value: 643 }
]

const BarChart =() => {

    // Dimensions
    const SVGHeight = 200
    const SVGWidth = deviceWidth
    const graphHeight = SVGHeight - 2 * GRAPH_MARGIN
    const graphWidth = SVGWidth - 2 * GRAPH_MARGIN
    const data = data2

    // X scale point
    const xDomain = data.map(item => item.label)
    const xRange = [0, graphWidth]
    const x = d3.scalePoint()
      .domain(xDomain)
      .range(xRange)
      .padding(1)

    // Y scale linear
    const yDomain = [0, d3.max(data, d => d.value)]
    const yRange = [graphHeight,0]
    const y = d3.scaleLinear()
      .domain(yDomain)
      .range(yRange)

      var area = d3.area()
      .x(function(d) { return x(d.label); })
      .y0(y(0))
      .y1(function(d) { return y(d.value); })
      .curve(d3.curveMonotoneX);
    return (
      <Svg width={SVGWidth} height={SVGHeight}>
        <G y={graphHeight}>
         <Path
            y={0}
            d={area(data)}
            // d='M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80'
            stroke='blue'
            fill='rgba(180,180,255,0.5)'
            strokeWidth={2}
          />
          {/* bars */}
          {data.map(item => (
            <Rect
              key={item.label}
              x={x(item.label) - (GRAPH_BAR_WIDTH / 2)}
              y={y(item.value) * -1}
              rx={2.5}
              width={GRAPH_BAR_WIDTH}
              height={y(item.value)}
              fill={colors.bars}
            />
          ))}

          {/* bottom axis */}
          <Line
            x1="0"
            y1="2"
            x2={graphWidth}
            y2="2"
            stroke={colors.axis}
            strokeWidth="0.5"
          />
        </G>
      </Svg>
    )
  }
