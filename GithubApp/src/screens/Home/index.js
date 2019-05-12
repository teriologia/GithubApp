import React, { Component } from 'react';
import { View, Text, SafeAreaView } from 'react-native';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
    <SafeAreaView>
        <View>
            <Text> Deneme </Text>
        </View>
    </SafeAreaView>
    );
  }
}

export default Home;
