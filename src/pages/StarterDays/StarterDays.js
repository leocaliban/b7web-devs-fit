import React from 'react';
import { connect } from 'react-redux';

import {
    HeaderText,
    DaysArea,
    NextButton
} from '../StarterDays/StarterDaysStyles';

import DefaultButton from '../../components/DefaultButton';
import Container from '../../components/ContainerComponent';
import Bolder from '../../components/BolderComponent';
import ButtonText from '../../components/ButtonTextComponent';

const Page = (props) => {

    const dias = [
        { label: 'Domingo' },
        { label: 'Segunda' },
        { label: 'Terça' },
        { label: 'Quarta' },
        { label: 'Quinta' },
        { label: 'Sexta' },
        { label: 'Sábado' }
    ];

    const toggleDay = (day) => {
        let newWorkoutDays = [...props.workoutDays];
        if (!props.workoutDays.includes(day)) {
            newWorkoutDays.push(day);
        } else {
            newWorkoutDays = newWorkoutDays.filter(element => element !== day);
        }
        props.setWorkoutDays(newWorkoutDays);
        props.navigation.setParams({ workoutDays: newWorkoutDays });
    };

    let firstName = props.name.split(' ')[0];

    return (
        <Container>
            <HeaderText style={{ marginTop: 50 }}>Olá <Bolder>{firstName}</Bolder>, tudo bem?</HeaderText>
            <HeaderText>Quais <Bolder>dias da semana</Bolder> você pretende treinar?</HeaderText>

            <DaysArea>
                {
                    dias.map((dia, index) =>
                        <DefaultButton
                            width="100%"
                            bgcolor={props.workoutDays.includes(index) ? '#A5E8BC' : '#0072C0'}
                            marginBottom="20px"
                            key={index}
                            onPress={() => toggleDay(index)}
                            underlayColor="#CCCCCC"
                        >
                            <ButtonText
                                color={props.workoutDays.includes(index) ? '#000000' : false}
                            >{dia.label}</ButtonText>
                        </DefaultButton>
                    )
                }
            </DaysArea>
        </Container>
    );
};

Page.navigationOptions = ({ navigation }) => {

    const nextAction = () => {
        if (!navigation.state.params || !navigation.state.params.workoutDays.length) {
            alert('Você precisa treinar pelo menos 1 dia!');
            return;
        }
        navigation.navigate('StarterLevel');
    };

    return {
        title: '',
        headerRight: <NextButton title="Próximo" onPress={nextAction}></NextButton>,
        headerRightContainerStyle: {
            marginRight: 10
        }
    };
};

const mapStateToProps = (state) => {
    return {
        name: state.userReducer.name,
        workoutDays: state.userReducer.workoutDays
    }
}

const mapDispatchProps = (dispatch) => {
    return {
        setName: (name) => dispatch({ type: 'SET_NAME', payload: { name } }),
        setWorkoutDays: (workoutDays) =>
            dispatch({ type: 'SET_WORKOUTDAYS', payload: { workoutDays } })
    }
}

export default connect(mapStateToProps, mapDispatchProps)(Page);