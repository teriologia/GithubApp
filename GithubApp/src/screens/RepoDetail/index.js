import React, { Component } from 'react';
import { View, SafeAreaView, ImageBackground, Text } from 'react-native';
import { connect } from 'react-redux'
import { searchAction, searchUser } from '../../store/actions'
import { SearchInput } from '../../components'
import styles from './styles'

class RepoDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <SafeAreaView>
                    <View style={styles.searchView}>
                        <SearchInput />
                        <Text style={styles.error}></Text>
                    </View>
                    <View style={styles.created}>
                        <Text>Created By: Mehmet Serdar Tekin</Text>
                    </View>
            </SafeAreaView>
        );
    }
}

const MapStateToProps = (state) => {
    const { search, data, status } = state.data
    return { search, data, status }
}

export default connect(MapStateToProps, { searchAction, searchUser })(RepoDetail);
