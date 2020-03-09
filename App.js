/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from "./src/components/auth/Login"
import Registration from "./src/components/auth/Registration"

import Dashboard from "./src/components/main/Dashboard"

import Splash from "./src/components/SplashComponent/Splash"

import { getTokenRequest } from "./src/action/index"




const Stack = createStackNavigator();

function App(props) {

  useEffect(() => {
    setTimeout(function () {
      props.getTokenRequest();
    }, 3000);

  }, []);

  if (props.loading) {
    return (
      <NavigationContainer>

        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="Splash" component={Splash} />
        </Stack.Navigator>

      </NavigationContainer >
    )
  } else {
    return (
      <NavigationContainer>
        {props.token == null ?
          <Stack.Navigator screenOptions={{
            headerShown: false
          }}>
            <Stack.Screen name="Login" component={Login} />
          </Stack.Navigator>
          :
          <Stack.Navigator screenOptions={{
            headerShown: false
          }}>
            <Stack.Screen name="Dashboard" component={Dashboard} />
          </Stack.Navigator>

        }

      </NavigationContainer >
    );
  }


}


const mapStateToProps = state => {
  return {
    token: state.TokenReducer.token,
    status: state.TokenReducer.status,
    loading: state.TokenReducer.loading,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getTokenRequest: () => {
      dispatch(getTokenRequest())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);