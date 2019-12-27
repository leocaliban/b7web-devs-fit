import { connect } from 'react-redux';
import { StackActions, NavigationActions } from 'react-navigation';

const Preload = (props) => {
    if (!props.name) {
        resetNavigation(props, 'StarterStack');
    } else {
        resetNavigation(props, 'AppTab');
    }
    return null;
};

function resetNavigation(props, pageName) {
    props.navigation.dispatch(StackActions.reset({
        index: 0,
        actions: [
            NavigationActions.navigate({
                routeName: pageName
            })
        ]
    }));
}

const mapStateToProps = (state) => {
    return {
        name: state.userReducer.name
    };
};

export default connect(mapStateToProps)(Preload);
