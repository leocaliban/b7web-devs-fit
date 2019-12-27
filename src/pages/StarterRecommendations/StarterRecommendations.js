import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import {
    HeaderText,
    LevelArea,
    NextButton,
    WorkoutList
} from './StarterRecommendationsStyle';

import DefaultButton from '../../components/DefaultButton';
import Container from '../../components/ContainerComponent';
import ButtonText from '../../components/ButtonTextComponent';
import Bolder from '../../components/BolderComponent';

import workoutData from '../../presetWorkouts.json';

const Page = (props) => {

    useEffect(() => {
        props.navigation.setParams({ myWorkouts: props.myWorkouts })
    }, [props.myWorkouts]);

    return (
        <Container>

            <HeaderText style={{ marginTop: 50 }}>Treinos disponíveis para você começar.</HeaderText>
            <HeaderText>Você selecionou <Bolder>{props.myWorkouts.length}</Bolder> trienos.</HeaderText>

            <WorkoutList
                data={workoutData}
                renderItem={({item}) => <HeaderText>{item.name}</HeaderText>}
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
        // if (!navigation.state.params || !navigation.state.params.level) {
        //     alert('Você precisa selecionar um nível!');
        //     return;
        // }
        // navigation.navigate('StarterRecommendations');
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
        setLevel: (level) => dispatch({ type: 'SET_LEVEL', payload: { level } })
    }
}

export default connect(mapStateToProps, mapDispatchProps)(Page);