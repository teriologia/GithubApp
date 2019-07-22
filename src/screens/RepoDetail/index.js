import React, { Component, Fragment } from 'react';
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
    renderItem({ item }) {
        return (
            <CommitCard onPress={() => Actions.CommitDetail({ url: item.url })} author={item.commit.author.name} name={item.commit.message} />
        )
    }

    componentWillMount() {
        const { Owner, repoName } = this.props
        this.props.getRepoCommit(Owner, repoName)
    }

    render() {
        const { spinner, commits, repoName } = this.props
        if (spinner === false) {
            return (
                <Fragment>
                    <Header onPress={() => Actions.pop()} name={repoName} />
                    <View style={styles.mainView}>
                        <FlatList
                            data={commits}
                            renderItem={this.renderItem}
                        />
                    </View>
                </Fragment>
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
