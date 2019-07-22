import React from "react";
import { View } from "react-native";
import { Scene, Router, Stack } from "react-native-router-flux";
import { Home, User, RepoDetail, CommitDetail } from "../screens";

const RouterComponent = () => {
  return (
    <Router>
      <Stack key="main" hideNavBar>
        <Scene
          key="Home"
          component={Home}
          renderLeftButton={<View />}
          initial
        />
        <Scene key="User" component={User} renderLeftButton={<View />} />
        <Scene key="RepoDetail" component={RepoDetail} />
        <Scene key="CommitDetail" component={CommitDetail} />
      </Stack>
    </Router>
  );
};

export default RouterComponent;
