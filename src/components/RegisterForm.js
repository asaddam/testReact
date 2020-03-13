import React, { Component } from 'react';
import { View, StyleSheet, Platform, TouchableOpacity, TextInput} from 'react-native';
import { Text, Input, Button, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import {
  onInputText
} from '../actions'

class Register extends Component {

  state = {
    phoneNumber: '',
    confirmResult: null,
    codeInput: '',
    verCode: '123456',
    verifikasi: true,
    btnLoading: false,
    btnDisabled: true,
    error: ''

  }
  

  onPressDaftar = () => {
    try {
      this.setState({ btnLoading: true, error: '' })
    
      if(this.state.phoneNumber !== ''){
        this.setState({ btnLoading: true, phoneNumber: this.state.phoneNumber, verifikasi: false  })
        
        console.log(this.state.phoneNumber)
      } else {
        this.setState({ btnLoading: false, error: 'Input yang anda masukkan tidak ditemukan'})
      }

      this.setState({ btnLoading: false })
    } catch (error) {
      this.setState({ btnLoading: false, error: 'input yang anda masukkan tidak sesuai' })
    }
    
  }

  onChangeVerifikasi = (val) => {
    if(val != ''){
      this.setState({ codeInput: val, btnDisabled: false})
    } else {
      this.setState({ btnDisabled: true, codeInput: '' })
    }
  }

  onPressVerif = () => {
    if(this.state.codeInput.length === 6){
      this.props.navigation.navigate('Login')
      this.setState({ verifikasi: true })

    }

  }

    render(){
      if(this.state.verifikasi){
        return(
          <View>
              <Text h2 style={{ marginVertical: 30}}> Daftar</Text>
              <Text style={{ marginBottom: 1, marginLeft: 20, paddingBottom: 10}}>Nomor handphone</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
              <TextInput 
                style={ [styles.phoneNumberInput, { width: '12%', borderRightColor: 'black',
                  borderRightWidth: 1,textAlign: 'right'
                }]}
                placeholder='+62'
                placeholderTextColor='black'
                maxLength={3} 
                editable={false}
                underlineColorAndroid='transparent'                 
              />
              <TextInput 
                style={[ styles.phoneNumberInput, { width: '75%'}]}
                value={this.state.phoneNumber}
                onChangeText={(val) => this.setState({ phoneNumber: val })}
                keyboardType={Platform.OS === 'ios' ? 'number-pad' : 'numeric'}
              
              />
              </View>
              <Button 
                containerStyle={{ marginVertical: 20, width: '90%', marginLeft: 20}}
                buttonStyle={{ borderRadius: 10 }}
                title='Daftar'
                titleStyle={{ color: 'black' }}
                onPress={this.onPressDaftar}
                loading={this.state.btnLoading}
              />
              <TouchableOpacity
                accessible={true}
                onPress={this._onPress}>
                <View >
                  <Text accessibilityRole='link'
                    style={{ color: 'blue', textDecorationLine: 'underline', marginLeft: 30}}
                    >Daftar dengan Email?</Text>
                </View>
              </TouchableOpacity>
          </View>
      )
      }
      return(
        <View style={{ flex: 1, alignItems: 'center'}}>
          <Icon 
            containerStyle={{ marginVertical: 30}}
            name='smartphone'
            size={50}
            color='blue'
          />
          <Text style={{ fontWeight: 'bold' ,}}>Masukkan kode Aktivasi</Text>
          <Text>Kode verifikasi telah dikirim ke nomor {this.state.phoneNumber} </Text>
          <TextInput 
            maxLength={6}
            placeholder='_ _ _ _ _ _'
            autoCapitalize='none'
            placeholderTextColor='black'
            selectionColor='black'
            autoCorrect={false}
            autoFocus
            underlineColorAndroid='transparent'
            style={styles.textInput}
            keyboardType={Platform.OS === 'ios' ? 'number-pad' : 'numeric'}
            value={this.state.codeInput}
            onChangeText={(val) => this.onChangeVerifikasi(val)}
            errorMessage='kode verifikasi yang anda masukkan salah'
          />
          <Button 
            title='Aktivasi'
            onPress={this.onPressVerif}
            disabled={this.state.btnDisabled}
            containerStyle={{ marginVertical: 20, width: '80%'}}
            buttonStyle={{ borderRadius: 10 }}
          />
        </View>
      )
        
    }
}

const styles = StyleSheet.create({
  containerStyle: {
      flex: 1,
      alignItems: 'flex-start',
      backgroundColor: '#fff'
  },
  inputContainerStyle: {
      marginTop: 50,
      marginBottom: 100,
      width: '100%'
  },
  textInput: {
    padding: 0,
    margin: 0,
    // flex: 1,
    fontSize: 20,
    height: 60,
  },
  phoneNumberInput: {
    borderBottomColor: 'black', 
    borderBottomWidth: 1, 
    fontSize: 20, 
    paddingVertical: -1, 
  }
})

const mapStateToProps = ({ user }) => {
  return { user }
}

export default connect(mapStateToProps, { onInputText })(Register);