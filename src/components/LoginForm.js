import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Card, Input, Icon, Button } from 'react-native-elements';
import { onInputText,
    onUserEnter,
    hideUnhidePass } from '../actions';

class Login extends Component {

    state = {
        phone: ''
    }

    onBtnLogin = () => {
        if(this.props.loginForm.phoneNumber !== ''){
            this.props.onUserEnter(this.props.loginForm)
            console.log(this.props.loginForm.phoneNumber)
            this.props.navigation.navigate('Profile')
        }
    }

    render(){
        return(
            <View style={styles.containerStyle}>
                <Text h2 style={{ marginLeft: 40 }}>Login</Text>
                <View style={{ alignItems: 'center'}}>
                <Card 
                    containerStyle={{ width: '80%', alignItems: 'center'}}
                    wrapperStyle={{ width: '90%' }}
                    >
                    <View style={{ marginVertical: 10}}>
                    <Text>Nomor Handphone/ Email</Text>
                    <Input 
                        value={this.props.loginForm.phoneNumber}
                        onChangeText={(val) => this.props.onInputText('phoneNumber', val)}
                    />
                    </View>
                    <View style={{ marginVertical: 10}}>
                    <Text>Kata Sandi</Text>
                    <Input 
                        rightIcon={
                            <Icon 
                            name={this.props.loginForm.hidePassword ? 'visibility-off' : 'visibility' }
                            size={24}
                            color={this.props.loginForm.hidePassword ? '#bfc3c9' : 'black' }
                            onPress={() => this.props.hideUnhidePass()}
                            />
                        }
                        value={this.props.loginForm.password}
                        onChangeText={(val) => this.props.onInputText('password', val)}
                        secureTextEntry={this.props.loginForm.hidePassword}

                    />
                    </View>
                    <TouchableOpacity
                    accessible={true}
                    onPress={this._onPress}>
                    <View style={{ marginVertical: 10, alignItems: 'flex-end'}}>
                        <Text accessibilityRole='link'
                        style={{ color: 'blue', textDecorationLine: 'underline', marginLeft: 30}}
                        >Lupa Kata Sandi?</Text>
                    </View>
                    </TouchableOpacity>
                    <Button 
                        title='Login'
                        buttonStyle={{ borderRadius: 10 }}
                        titleStyle={{ color: 'black' }}
                        onPress={this.onBtnLogin}
                    />
                </Card>
                </View>
                <TouchableOpacity
                  accessible={true}
                  onPress={this._onPress}>
                  <View style={{ alignItems: 'flex-end', textAlign: 'left', marginRight: 65, marginTop: 10 }}>
                    <Text accessibilityRole='link'
                      style={{ color: 'blue', textDecorationLine: 'underline' }}
                      >Buat Akun</Text>
                  </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#fff',
    },
    cardContainerStyle: {
        marginTop: 20,
        marginBottom: 100,
        // justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20
    }
  })

const mapStateToProps = ({ user, loginForm}) => {
    return { user, loginForm}
}

export default connect(mapStateToProps, {onInputText, onUserEnter, hideUnhidePass})(Login);