import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeStack from './HomeStack';
//import WorkoutStack from './WorkoutStack';
//import MyWorkoutsStack from './MyWorkoutsStack';

import CustomTab from '../components/CustomTab';

export default createBottomTabNavigator({
    HomeStack,
    //WorkoutStack,
    //MyWorkoutsStack
}, {
    tabBarComponent: (props) => (
        <CustomTab
            {...props}
            items={
                [
                    {
                        type: 'regular',
                        text: 'Início',
                        icon: require('../assets/home.png'),
                        route: 'HomeStack'
                    },
                    {
                        type: 'big',
                        icon: require('../assets/dumbbell.png'),
                        route: 'WorkoutStack'
                    },
                    {
                        type: 'regular',
                        text: 'Treinos',
                        icon: require('../assets/myworkouts.png'),
                        route: 'MyWorkoutsStack'
                    }
                ]
            }
        >

        </CustomTab>
    )
});