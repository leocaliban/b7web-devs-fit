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
        { label: 'Segunda' },
        { label: 'Terça' },
        { label: 'Quarta' },
        { label: 'Quinta' },
        { label: 'Sexta' },
        { label: 'Sábado' },
        { label: 'Domingo' }
    ];

    let firstName = props.name.split(' ')[0];

    return (
        <Container>
            <HeaderText style={{ marginTop: 50 }}>Olá <Bolder>{firstName}</Bolder>, tudo bem?</HeaderText>
            <HeaderText>Quais <Bolder>dias da semana</Bolder> você pretende treinar?</HeaderText>

            <DaysArea>
                {
                    dias.map((dia, index) =>
                        <DefaultButton
                            width="100px"
                            bgcolor="#0072C0"
                            marginBottom="20px"
                            key={index}
                        >
                            <ButtonText>{dia.label}</ButtonText>
                        </DefaultButton>
                    )
                }
            </DaysArea>
        </Container>
    );
};

Page.navigationOptions = ({ navigation }) => {

    const nextAction = () => {
        if (!navigation.state.params || !navigation.state.params.name) {
            alert('Você precisa digitar seu nome!');
            return;
        }
        navigation.navigate('StarterDays');
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
        name: state.userReducer.name
    }
}

const mapDispatchProps = (dispatch) => {
    return {
        setName: (name) => dispatch({ type: 'SET_NAME', payload: { name } })
    }
}

export default connect(mapStateToProps, mapDispatchProps)(Page);