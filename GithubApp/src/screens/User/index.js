import React, { Component } from 'react';
import styles from './styles'
import { View, Text, SafeAreaView, Image } from 'react-native';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    console.log(this.props.data)
    return (
    <SafeAreaView>
        <View style={styles.mainView}>
          <View style={{flexDirection: 'row'}}>
            <Image source={{ uri: this.props.data.avatar_url}} style={styles.avatar} />
          <View style={{flexDirection: 'column', marginLeft: 10,}}> 
            <Text style={styles.userName}>{this.props.data.login}</Text>
            <Text style={styles.name}>{this.props.data.name}</Text>
            <Text style={styles.location}>{this.props.data.location}</Text>
          </View>
          </View>
            <View style={styles.repo}>
              <View style={styles.userDetail}>
                <Text style={styles.detailText} >Repositories</Text>
                <Text style={styles.detailText} >{this.props.data.public_repos}</Text>
              </View>
              <View style={styles.userDetail}>
                <Text style={styles.detailText} >Followers</Text>
                <Text style={styles.detailText} >{this.props.data.followers}</Text>
              </View>
                <View style={styles.userDetail}>
                <Text style={styles.detailText} >Following</Text>
                <Text style={styles.detailText} >{this.props.data.following}</Text>
              </View>
              </View>
        </View>
    </SafeAreaView>
    );
  }
}

export default User;
