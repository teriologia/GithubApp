import React, { Component } from 'react';
import { View, SafeAreaView, FlatList } from 'react-native';
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import { getRepoCommit } from '../../store/actions'
import { CommitCard, Header, Spinner } from '../../components'
import styles from './styles'

class RepoDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    renderItem({item}) {
        return(
            <CommitCard onPress={() => Actions.CommitDetail({ url: item.url})} author={item.commit.author.name} name={item.commit.message} />
        )
    }

    componentWillMount(){
        const { Owner, RepoName} = this.props
        this.props.getRepoCommit(Owner, RepoName)
    }

    render() {
        console.log(this.props)
        if (this.props.spinner === false)
        {
            return (
                <SafeAreaView style={{ flex: 1 }}>
                    <Header onPress={() => Actions.pop()} name={this.props.RepoName} />
                    <View style={styles.mainView}>
                        <FlatList
                            data={this.props.commits}
                            renderItem={this.renderItem}
                        />
                    </View>
                </SafeAreaView>
            )
        }
  
        return (
            <Spinner size='large' />
        )
    }
}

const MapStateToProps = (state) => {
    const { commits, spinner } = state.data
    return { commits, spinner }
}

export default connect(MapStateToProps, { getRepoCommit })(RepoDetail);
