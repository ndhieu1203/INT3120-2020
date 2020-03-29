import React from 'react';
import { 
  StyleSheet,YellowBox
} from 'react-native';
import {
  createAppContainer
} from 'react-navigation';
import AppNavigator from './AppNavigator'
import AddData from './screens/Adddata';
import {decode, encode} from 'base-64'

if (!global.btoa) {  global.btoa = encode }

if (!global.atob) { global.atob = decode }
YellowBox.ignoreWarnings(['Warning: ReactNative.createElement']);

const AppContainer  =  createAppContainer(AppNavigator);
export default class App extends React.Component {
  
  render(){
    //return(<AddData/>)
    return (
      <AppContainer/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#fff',
    justifyContent: 'flex-end',
    paddingLeft: 16,
    paddingRight: 16,
    marginBottom: 40
  },
});
