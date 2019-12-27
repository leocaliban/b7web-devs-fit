import { createStackNavigator } from 'react-navigation-stack';

import StarterIntro from '../pages/StarterIntro/StarterIntro';
import StarterName from '../pages/StarterName/StarterName';
import StarterDays from '../pages/StarterDays/StarterDays';
import StarterLevel from '../pages/StarterLevel/StarterLevel';
import StarterRecommendations from '../pages/StarterRecommendations/StarterRecommendations';

export default createStackNavigator({
    StarterIntro,
    StarterName,
    StarterDays,
    StarterLevel,
    StarterRecommendations
});