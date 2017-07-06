import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducers from './reducers';
import firebase from 'firebase';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyByP6vWKDUiLQdU1-cwHUKH7lRikSaZ50Q',
      authDomain: 'manager-aec6a.firebaseapp.com',
      databaseURL: 'https://manager-aec6a.firebaseio.com',
      projectId: 'manager-aec6a',
      storageBucket: 'manager-aec6a.appspot.com',
      messagingSenderId: '38947022461'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

    return (
      <Provider store={store}>
        <Router/>
      </Provider>
    );
  }
}

export default App;