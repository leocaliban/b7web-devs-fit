import { createAppContainer } from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack';

import Preload from '../pages/Preload';
import StarterStack from './StarterStack';
//import AppTab from '../pages/AppTab';

const MainStack = createStackNavigator({
    Preload,
    StarterStack,
    //AppTab
}, {
    initialRouteName: 'Preload',
    defaultNavigationOptions: {
        header: null
    }
});

export default createAppContainer(MainStack);