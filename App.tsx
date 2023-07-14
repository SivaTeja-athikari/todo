import React, { Component } from 'react'
import StackNavigationTab from './src/navigations/StackNavigationTab'
import { Provider } from "react-redux";
import store from './src/redux/store';

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <StackNavigationTab />
      </Provider>
    )
  }
}

export default App
