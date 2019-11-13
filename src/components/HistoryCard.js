import React from 'react'
import { Text, View, ImageBackground } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import Icon from './Icon'

const darkText ='#212337'
const feintGreen ='#d3f0e8'
const green = '#31be57';
const feintOrange= '#f7e7e3';
const orange = '#ed7136';
const feintPurple ='#e6e5f3';
const purple = '#7670c6';

export default class HistoryCard extends React.PureComponent {
    getColor(){
        switch (this.props.historyData.type) {
            case 'contribution':
            return green;
            case 'cash-out':
            return orange;
            case 'contribution2':
            return purple;        
            default:
            return green; 
        }
    }
  render () {
    return (
        <View style={styles.cardContainer}>
            <Icon name='pulse' color={this.getColor()} size={EStyleSheet.value('30rem')} />
            <View style={cardBody}>  
                <View style={styles.row}>
                    <Text style={styles.cardNumberTitle}>CARD NUMBER</Text>
                    <Text style={styles.cardNumberTitle}>CARD NUMBER</Text>
                </View>

                <View style={styles.row}>
                    <Text style={styles.cardNumberTitle}>CARD NUMBER</Text>
                    <Text style={styles.cardNumberTitle}>CARD NUMBER</Text>
                </View>
            </View>
      </View>
    )
  }
}

const styles = EStyleSheet.create({
    row:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between',
        alignItems:'center'
    },
    cardBody:{
        flex:1,
        justifyContent:'space-evenly',

    },
    cardContainer:{
        borderRadius:'8rem',
        width:'100%',
        alignItems:'center',
        justifyContent:'space-evenly',
        flexDirection:'row',
        backgroundColor:'f6f6f9',
        marginBottom:'10rem'
    }
})
