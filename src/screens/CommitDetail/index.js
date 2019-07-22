import React, { Component, Fragment } from "react";
import { TouchableOpacity, View, Text, FlatList } from "react-native";
import { getCommitDetails } from "../../store/actions";
import { connect } from "react-redux";
import { Spinner } from "../../components";
import styles from "./styles";

class CommitDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.props.getCommitDetails(this.props.url);
  }
  renderItem = ({ item }) => {
    return (
      <TouchableOpacity>
        <View style={styles.fileView}>
          <Text style={styles.fileText}>
            <Text style={{ color: "#00FF00" }}>FİLE SOURCE: </Text>
            {item.filename}
          </Text>
          <View
            style={{
              width: "100%",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Text>Click To Show Codes</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    if (this.props.spinner === true) {
      return <Spinner size="large" />;
    }
    return (
      <Fragment>
        <FlatList
          contentContainerStyle={styles.main}
          data={this.props.fileNames.files}
          renderItem={this.renderItem}
        />
      </Fragment>
    );
  }
}

const MapStateToProps = state => {
  const { fileNames, spinner } = state.data;
  return { fileNames, spinner };
};

export default connect(
  MapStateToProps,
  { getCommitDetails }
)(CommitDetail);
