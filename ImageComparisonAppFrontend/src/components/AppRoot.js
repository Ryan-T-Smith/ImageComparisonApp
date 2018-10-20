import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PageRouterContainer from "./PageRouter/PageRouterContainer";
import {Provider} from "react-redux";
import {configureStore} from "../store/store";

export default class AppRoot extends React.Component {

  render() {
    return (
      <Provider store={configureStore()}>
        <View style={styles.container}>
          <PageRouterContainer/>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
