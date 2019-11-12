import React from 'react'
import { View, Image, Dimensions, TouchableOpacity, Text } from 'react-native'
import { Icon} from '../../../App.js'
import EStyleSheet from 'react-native-extended-stylesheet'
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs'
import { store } from '../../redux/reducer'
import { connect } from 'react-redux'

 const Dashboard = createBottomTabNavigator(
  {
    Home: Home,
    Statement: Statement,
    CashOut: CashOut,
    Profile: Profile
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state
        // You can return any component that you like here!
        return <TabIcon tintColor={tintColor} routeName={routeName} />
      }
    }),
    tabBarOptions: {
      activeTintColor: '#ffa500',
      inactiveTintColor: '#ddd',
      labelStyle: {
        fontSize: 15
      },
      style: {
        // backgroundColor: 'limegreen',
        height: 90,
        paddingBottom: 20
      }
    }
  }
)

class TabIconComponent extends React.PureComponent {
  render () {
    var { routeName, tintColor } = this.props
    var badgeCount = this.props.ordersBadgeCount
    let iconName
    if (routeName === 'Dashboard') {
      iconName = 'home'
    } else if (routeName === 'Orders') {
      iconName = 'users'
    } else if (routeName === 'Chefs') {
      iconName = 'chef'
    } else if (routeName === 'Users') {
      iconName = 'users'
    }
    return (
      <View>
        <MyIcon
          name={iconName}
          size={EStyleSheet.value('30rem')}
          color={tintColor}
        />
        {badgeCount !== 0 && routeName === 'Orders' && (
          <View style={styles.badgeContainer}>
            <Text1 style={styles.badgeCount}>{badgeCount}</Text1>
          </View>
        )}
      </View>
    )
  }
}


const styles = EStyleSheet.create({
  badgeContainer: {
    width: '20rem',
    height: '20rem',
    borderRadius: '10rem',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '$green',
    position: 'absolute',
    top: -7,
    right: -7
  },
  badgeCount: {
    color: '#fff',
    fontSize: '12rem'
  }
})


const AppRootNavigation =  createStackNavigator({
  OrderSuccess: { screen: OrderSuccess},
  UserTabs:{screen:UserTabs,navigationOptions: { header: null }},
});

export default UserNav = createAppContainer(AppRootNavigation);
