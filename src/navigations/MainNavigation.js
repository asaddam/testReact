import React from 'react';
import Register from '../components/RegisterForm';
import Login from '../components/LoginForm';
import Profile from '../components/ProfileForm';
import AddAddress from '../components/AddAddress';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()

export default (props) => {
    return (
        <Stack.Navigator 
          initialRouteName="Register"
          headerMode="none"
          >
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="TambahAlamat" component={AddAddress} />
        </Stack.Navigator>
    )
}