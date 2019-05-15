import React, { Component } from 'react';
import styles from './styles'
import { View, Text, SafeAreaView, Image, FlatList } from 'react-native';
import { connect } from 'react-redux'
import { RepoCard, Spinner } from '../../components'
import { getRepos } from '../../store/actions'
import { Actions } from 'react-native-router-flux'

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  renderItem({item}){
    const created = item.created_at.substring(0, 10)
    return(
      <RepoCard onPress={() => Actions.RepoDetail({ Owner: item.owner.login, RepoName: item.name })} names={item.name} language={item.language} created_at={created} />
    )
  }

  componentWillMount(){
    this.props.getRepos(this.props.data.repos_url)
  }

  render() {
    if (this.props.spinner === false) {
      return (
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.mainView}>
            <View style={{ flexDirection: 'row' }}>
              <Image source={{ uri: this.props.data.avatar_url }} style={styles.avatar} />
              <View style={{ flexDirection: 'column', marginLeft: 10, }}>
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
          <View style={styles.repoView}>
            <FlatList
              data={this.props.repos}
              renderItem={this.renderItem}
            />

          </View>
        </SafeAreaView>
      );
    }
    
    return (
      <Spinner size='large' />
    )
  }
}

const MapStateToProps = (state) => {
  const { repos, spinner} = state.data
  return { repos, spinner}
}

export default connect(MapStateToProps, { getRepos })(User);
