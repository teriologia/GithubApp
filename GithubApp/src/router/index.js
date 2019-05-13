import React from 'react';
import { View } from 'react-native';
import { Scene, Router, Stack, Actions } from 'react-native-router-flux';
import { Home, User } from '../screens'


const RouterComponent = () => {
    return (
        <Router>
                <Stack key='main' hideNavBar>
                    <Scene

                        key='Home'
                        component={Home}
                        renderLeftButton={<View />}
                        initial
                    />
                    <Scene
                        key='User'
                        component={User}
                        renderLeftButton={<View />}
                    />
                </Stack>
        </Router>
    )
}

export default RouterComponent