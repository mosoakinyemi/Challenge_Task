import React from 'react'
import {
  Text,
  View,
  TextInput,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import Icon from '../components/Icon'
import Card from '../components/Card'

const PageTitle = () => {
  return (
    <View style={styles.pageTitleContainer}>
      <Text style={styles.pageTitle}>Add Card</Text>
    </View>
  )
}

export default class AddCard extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: () => <PageTitle />,
      headerLeft: () => (
        <Icon name='left' color='#606060' size={17} style={styles.bacButton} />
      )
    }
  }

  state = {
    cardNumber: '',
    cardExpiry: '',
    cvv: '',
    currentInput: '',
    isLoading: false
  }

  addCard = () => {
    this.setState({ isLoading: true })
    setTimeout(() => {
      // alert('Gbam')
      this.props.navigation.navigate('Dashboard')
      this.setState({ isLoading: false })
    }, 2000)
  }

  componentDidMount () {
    // this.cardNumberInputRef.focus()
  }

  getLabelStyle (currentInput) {
    if (this.state.currentInput === currentInput) {
      return { fontWeight: 'bold', color: '#707070' }
    } else {
      return { fontWeight: '300', color: '#c9c9c9' }
    }
  }

  getBorderColor (currentInput) {
    if (this.state.currentInput === currentInput) {
      return { borderBottomColor: '#00dc53' }
    } else {
      return { borderBottomColor: '#ddd' }
    }
  }

  getAddButtonColor(){
    if(this.state.cardNumber !== '' && this.state.cvv !== '' && this.state.cardExpiry !== '' ){
      return{backgroundColor:'limegreen'}
    }
  }

  render () {
    return (
      <ScrollView
        contentContainerStyle={{ alignItems: 'center' }}
        style={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <KeyboardAvoidingView enabled behavior='padding' style={styles.body}>
          <Card
            style={styles.cardStyle}
            cardNumber={this.state.cardNumber}
            cardExpiry={this.state.cardExpiry}
          />

          <View style={styles.cardNumberInputContainer}>
            <Text style={this.getLabelStyle('cardNumber')}>My Card Number</Text>
            <View style={[styles.cardNumberInputBody, this.getBorderColor('cardNumber')]}>
              <TextInput
                style={styles.cardNumberInputBox}
                value={this.state.cardNumber}
                onBlur={() => this.setState({ currentInput: '' })}
                onFocus={() => this.setState({ currentInput: 'cardNumber' })}
                returnKeyType='next'
                onChangeText={text => this.setState({ cardNumber: text })}
                blurOnSubmit={false}
                keyboardType='numeric'
                onSubmitEditing={() => this.expiryInputRef.focus()}
                ref={ref => (this.cardNumberInputRef = ref)}
              />
              <Icon
                name='check'
                size={EStyleSheet.value('15rem')}
                color={this.getBorderColor('cardNumber').borderBottomColor}
              />
            </View>
          </View>

          <View style={styles.cvvAndExpiryInputs}>
            <View style={[styles.cvvInputContainer, this.getBorderColor('expiry')]}>
              <Text style={this.getLabelStyle('expiry')}>Exp. Date</Text>
              <TextInput
                style={styles.halfInputBox}
                value={this.state.cardExpiry}
                onBlur={() => this.setState({ currentInput: '' })}
                onFocus={() => this.setState({ currentInput: 'expiry' })}
                returnKeyType='next'
                keyboardType='numeric'
                onChangeText={text => this.setState({ cardExpiry: text })}
                blurOnSubmit={false}
                onSubmitEditing={() => this.cvvInputRef.focus()}
                ref={ref => (this.expiryInputRef = ref)}
              />
            </View>

            <View style={[styles.cvvInputContainer, this.getBorderColor('cvv')]}>
              <Text style={this.getLabelStyle('cvv')}>CVV</Text>
              <TextInput
                style={styles.halfInputBox}
                value={this.state.cvv}
                onBlur={() => this.setState({ currentInput: '' })}
                onFocus={() => this.setState({ currentInput: 'cvv' })}
                returnKeyType='done'
                keyboardType='numeric'
                onChangeText={text => this.setState({ cvv: text })}
                blurOnSubmit={false}
                onSubmitEditing={() => this.addCard()}
                ref={ref => (this.cvvInputRef = ref)}
              />
              <Icon name='info' color='#707070' size={EStyleSheet.value('15rem')} />
            </View>
          </View>
          <TouchableOpacity
            onPress={() => this.addCard()}
            activeOpacity={0.8}
            style={[styles.addCardButton,this.getAddButtonColor()]}
          >
            <Text style={styles.addCardText}>ADD CARD</Text>
            {this.state.isLoading && <ActivityIndicator color='white' />}
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }
}

const styles = EStyleSheet.create({
  addCardText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: '16rem',
    marginRight: '30rem'
  },
  addCardButton: {
    height: '50rem',
    width: '320rem',
    backgroundColor: '#bababa',
    borderRadius: '10rem',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: '20rem'
  },
  halfInputBox: {
    flex: 1
  },
  labelText: {
    color: '#c9c9c9'
  },
  cardNumberInputBox: {
    flex: 1
  },
  cvvAndExpiryInputs: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between'
  },
  cvvInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '150rem',
    borderBottomWidth: '1.5rem',
    justifyContent: 'space-between'
  },
  cardNumberInputBody: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: '1.5rem'
  },
  cardNumberInputContainer: {
    width: '100%'
  },
  cardStyle: {
    marginVertical: '25rem'
  },
  body: {
    flex: 1,
    width: '320rem'
  },
  bacButton: {
    marginLeft: '25rem'
  },
  pageTitleContainer: {
    width: '100%',
    alignItems: 'center'
  },
  pageTitle: {
    fontSize: '20rem',
    fontWeight: 'bold',
    color: '#606060'
  },
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
})
