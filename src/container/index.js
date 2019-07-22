import React, { Component } from "react";
import { SafeAreaView } from "react-native";
import RouterComponent from "../router";

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <RouterComponent />
      </SafeAreaView>
    );
  }
}

const styles = {
  container: {
    flex: 1
  }
};

export default AppContainer;
