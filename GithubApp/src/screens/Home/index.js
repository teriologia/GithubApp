import React, { Component } from 'react';
import { View, SafeAreaView, ImageBackground, Text } from 'react-native';
import {connect} from 'react-redux'
import {searchAction, searchUser} from '../../store/actions'
import { SearchInput } from '../../components'
import styles from './styles'
import Bg from '../../assets/GitHub-logo.png'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  searchInput = (text) => {
      const {searchAction} = this.props
      searchAction(text)
  }
  searchButton = () =>{
    this.props.searchUser(this.props.search)
  }

  render() {
    return (
    <SafeAreaView>
        <ImageBackground source={Bg} style={styles.background}>
            <View style={styles.searchView}>
                <SearchInput onPress={this.searchButton} onChangeText={this.searchInput.bind(this)} />
                <Text style={styles.error}>{this.props.data.message}</Text>
            </View>
            <View style={styles.created}>
                <Text>Created By: Mehmet Serdar Tekin</Text>
            </View>
        </ImageBackground>
    </SafeAreaView>
    );
  }
}

const MapStateToProps = (state) => {
    const { search, data, spinner} = state.data
    return { search, data, spinner}
}

export default connect(MapStateToProps, {searchAction, searchUser})(Home);
