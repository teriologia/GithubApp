import React from 'react';
import { View } from 'react-native';
import { Scene, Router, Stack, Actions } from 'react-native-router-flux';
import { Home } from '../screens'


const RouterComponent = () => {
    return (
        <Router>
                <Stack key='main' headerTintColor="#c7c7c7">
                    <Scene
                        key='Home'
                        component={Home}
                        renderLeftButton={<View />}
                        initial
                    />
                </Stack>
        </Router>
    )
}

export default RouterComponent