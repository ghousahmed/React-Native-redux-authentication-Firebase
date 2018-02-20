import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,

} from 'react-native';
import Routers from './src/router'
import { Provider } from 'react-redux';
import store from './src/store';
import { Container } from 'native-base';
import * as firebase from 'firebase';



export default class App extends Component {

  componentWillMount() {
    var config = {
      apiKey: "AIzaSyDV65g6Z8uVHCdlsOsSvRBZaLdcjE-UD5c",
      authDomain: "fir-app-47835.firebaseapp.com",
      databaseURL: "https://fir-app-47835.firebaseio.com",
      projectId: "fir-app-47835",
      storageBucket: "fir-app-47835.appspot.com",
      messagingSenderId: "81881435595"
    };
    firebase.initializeApp(config);

    }
  render() {
    return (
      <Provider store={store}>
        <Container>
          <Routers />
        </Container>
      </Provider>
    );
  }
}


