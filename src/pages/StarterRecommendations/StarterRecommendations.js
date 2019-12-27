import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { StackActions, NavigationActions } from 'react-navigation';

import {
    HeaderText,
    NextButton,
    WorkoutList
} from './StarterRecommendationsStyle';

import DefaultButton from '../../components/DefaultButton';
import Container from '../../components/ContainerComponent';
import ButtonText from '../../components/ButtonTextComponent';
import Bolder from '../../components/BolderComponent';
import Workout from '../../components/WorkoutComponent';

import workoutData from '../../presetWorkouts.json';

const Page = (props) => {

    useEffect(() => {
        props.navigation.setParams({ myWorkouts: props.myWorkouts })
    }, [props.myWorkouts]);

    const addWorkout = (item) => {
        if (props.myWorkouts.findIndex(i => i.id == item.id) < 0) {
            props.addWorkout(item);
        } else {
            props.deleteWorkout(item);
        }
    };

    return (
        <Container>

            <HeaderText style={{ marginTop: 50 }}>Treinos disponíveis para você começar.</HeaderText>
            <HeaderText>Você selecionou <Bolder>{props.myWorkouts.length}</Bolder> trienos.</HeaderText>

            <WorkoutList
                data={workoutData}
                renderItem={({ item }) =>
                    <Workout
                        data={item}
                        addAction={() => addWorkout(item)}
                    ></Workout>}
                keyExtractor={item => item.id}
            ></WorkoutList>
        </Container>
    );
};

Page.navigationOptions = ({ navigation }) => {

    let headerButton = 'Ignorar';

    if (navigation.state.params && navigation.state.params.myWorkouts.length > 0) {
        headerButton = 'Concluir';
    }
    const nextAction = () => {
        navigation.dispatch(StackActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'AppTab' })
            ]
        }))
    };

    return {
        title: '',
        headerRight: <NextButton title={headerButton} onPress={nextAction}></NextButton>,
        headerRightContainerStyle: {
            marginRight: 10
        }
    };
};

const mapStateToProps = (state) => {
    return {
        myWorkouts: state.userReducer.myWorkouts
    }
}

const mapDispatchProps = (dispatch) => {
    return {
        addWorkout: (workout) => dispatch({ type: 'ADD_WORKOUT', payload: { workout } }),
        deleteWorkout: (workout) => dispatch({ type: 'DELETE_WORKOUT', payload: { workout } })
    }
}

export default connect(mapStateToProps, mapDispatchProps)(Page);