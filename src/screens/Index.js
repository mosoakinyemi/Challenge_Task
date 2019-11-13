import React from 'react'
import { View, Image, Dimensions, TouchableOpacity, Text } from 'react-native'
import Icon from '../components/Icon'
import EStyleSheet from 'react-native-extended-stylesheet'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createAppContainer, createStackNavigator } from 'react-navigation'
import Home from './Home'
import OtherScreen from './OtherScreen'
import AddCard from './AddCard'

const Dashboard = createBottomTabNavigator(
  {
    Home: Home,
    Statement: OtherScreen,
    Add: OtherScreen,
    CashOut: OtherScreen,
    Profile: OtherScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state
        return (
          <TabIcon
            focused={focused}
            tintColor={tintColor}
            routeName={routeName}
          />
        )
      }
    }),
    tabBarOptions: {
      showLabel: false,
      activeTintColor: '#000',
      inactiveTintColor: '#ddd',
      style: {
        height: 90,
        alignContent: 'flex-end'
        // paddingBottom: 20
      }
    }
  }
)

const AppRootNavigation = createStackNavigator({
  AddCard: { screen: AddCard },
  Dashboard: Dashboard
})

export const Index = createAppContainer(AppRootNavigation)

const TabIcon = props => {
  const { routeName, tintColor, focused } = props

  let iconName
  let pageName = routeName

  if (routeName === 'Home') {
    iconName = 'home'
  } else if (routeName === 'Statement') {
    iconName = 'file'
  } else if (routeName === 'Add') {
    iconName = 'plus'
  } else if (routeName === 'CashOut') {
    pageName = 'Cash Out'
    iconName = 'naira'
  } else if (routeName === 'Profile') {
    iconName = 'user'
  }

  if (routeName === 'Add') {
    return (
      <View style={styles.addIconContainer}>
        <Icon name={iconName} size={EStyleSheet.value('12rem')} color='white' />
      </View>
    )
  } else {
    return (
      <View style={styles.iconContainer}>
        <Icon
          name={iconName}
          size={EStyleSheet.value('30rem')}
          color={tintColor}
        />
        <Text style={[styles.label, { color: focused ? '#000' : '#ddd' }]}>
          {pageName}
        </Text>
      </View>
    )
  }
}

const styles = EStyleSheet.create({
  addIconContainer: {
    height: '30rem',
    width: '30rem',
    borderRadius: '7rem',
    backgroundColor: '$green',
    justifyContent: 'center',
    alignItems: 'center'
  },
  label: {
    fontSize: '12rem',
    marginTop: '12rem'
  },
  iconContainer: {
    alignItems: 'center'
  }
})
