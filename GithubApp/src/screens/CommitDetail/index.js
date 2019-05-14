import React, { Component } from 'react';
import { ScrollView, View, Text, FlatList } from 'react-native';
import { getCommitDetails } from '../../store/actions';
import { connect } from 'react-redux'
import styles from './styles';


class CommitDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentWillMount(){
      this.props.getCommitDetails(this.props.url)
  }
  renderItem = ({item}) => {
      return(
          <Text>{item.filename}</Text>
      )
  }

  render() {
    console.log(this.props.fileNames.files)
    return (
    <ScrollView>
        <View>
               <FlatList 
               data={this.props.fileNames.files}
               renderItem={this.renderItem}
               />
        </View>
    </ScrollView>
    );
  }
}

const MapStateToProps = (state) => {
    const { fileNames } = state.data
    return { fileNames }
}

export default connect(MapStateToProps, {getCommitDetails})(CommitDetail);
