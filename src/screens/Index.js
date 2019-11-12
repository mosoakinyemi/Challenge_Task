import React from 'react'
import { View, Image, Dimensions, TouchableOpacity, Text } from 'react-native'
import Icon from '../components/Icon'
import EStyleSheet from 'react-native-extended-stylesheet'
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs'

export const Index = createAppContainer(AppRootNavigation)

const AppRootNavigation = createStackNavigator({
  Dashboard: { screen: Dashboard, navigationOptions: { header: null } },
  AddCard: { screen: AddCard }
})

const Dashboard = createBottomTabNavigator(
  {
    Home: Home,
    Statement: Statement,
    Add: Add,
    CashOut: CashOut,
    Profile: Profile
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state
        return <TabIcon tintColor={tintColor} routeName={routeName} />
      }
    }),
    tabBarOptions: {
      showLabel: false,
      activeTintColor: '#ffa500',
      inactiveTintColor: '#ddd',
      style: {
        height: 90,
        // paddingBottom: 20
      }
    }
  }
)

const TabIcon = (props) =>{
    const { routeName, tintColor } = props

    let iconName

    if (routeName === 'Dashboard') {
      iconName = 'home'
    } else if (routeName === 'Statement') {
      iconName = 'file'
    } else if (routeName === 'Add') {
        iconName = 'plus'
    } else if (routeName === 'CashOut') {
      iconName = 'naira'
    } else if (routeName === 'Profile') {
      iconName = 'profile'
    }

    if(routeName==='Add'){
        return (
            <View style={styles.addIconContainer}>
              <Icon
                name={iconName}
                size={EStyleSheet.value('20rem')}
                color="white"
              />
            </View>
          )
    }
    else{
        return (
            <View style={tyles.iconContainer}>
              <Icon
                name={iconName}
                size={EStyleSheet.value('20rem')}
                color={tintColor}
              />
              <Text style={styles.label}>{routeName}</Text>
            </View>
          )
    }
  }


const styles = EStyleSheet.create({
    addIconContainer:{
       height:'30rem',
       width:'30rem',
       borderRadius:'7rem',
       backgroundColor:'$green'
    },
    label:{
        fontSize:'15rem'
    },
    iconContainer:{
        alignItems:'center',

    }
})
