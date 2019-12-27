import React from 'react';
import { connect } from 'react-redux';

import {
    HeaderText,
    LevelArea,
    NextButton
} from './StarterLevelStyle';

import DefaultButton from '../../components/DefaultButton';
import Container from '../../components/ContainerComponent';
import ButtonText from '../../components/ButtonTextComponent';
import Bolder from '../../components/BolderComponent';
const Page = (props) => {

    let title = '';

    switch (props.workoutDays.length) {
        case 1:
            title = 'Só 1 dia não vai adiantar muito, mas...';
            break;

        case 2:
            title = '2 dias parece pouco, não?';
            break;

        case 3:
            title = '3 dias é interessante...';
            break;

        case 4:
            title = 'Legal, 4 dias vai ser TOP!';
            break;

        case 5:
            title = 'É isso ai, 5 dias é o mínimo!!!';
            break;

        case 6:
            title = 'Eita 6 dias? Tá saindo da jaula?';
            break;

        case 7:
            title = 'BIIIRL!!! É todo dia p0##@!';
            break;
    }

    const selectLevel = (level) => {
        props.setLevel(level);
        props.navigation.setParams({ level });
    };

    return (
        <Container>
            <HeaderText style={{ marginTop: 50 }}>{title}</HeaderText>
            <HeaderText><Bolder>Qual o seu nível hoje?</Bolder></HeaderText>

            <LevelArea>

                <DefaultButton
                    width="100%"
                    bgcolor={props.level === 'beginner' ? '#A5E8BC' : '#0072C0'}
                    marginBottom="20px"
                    underlayColor="#CCCCCC"
                    onPress={() => selectLevel('beginner')}
                >
                    <ButtonText
                        color={props.level === 'beginner' ? '#000000' : false}
                    >Iniciante / Um frango</ButtonText>
                </DefaultButton>

                <DefaultButton
                    width="100%"
                    bgcolor={props.level === 'intermediate' ? '#A5E8BC' : '#0072C0'}
                    marginBottom="20px"
                    underlayColor="#CCCCCC"
                    onPress={() => selectLevel('intermediate')}
                >
                    <ButtonText
                        color={props.level === 'intermediate' ? '#000000' : false}
                    >Intermediário / Me viro bem</ButtonText>
                </DefaultButton>

                <DefaultButton
                    width="100%"
                    bgcolor={props.level === 'advanced' ? '#A5E8BC' : '#0072C0'}
                    marginBottom="20px"
                    underlayColor="#CCCCCC"
                    onPress={() => selectLevel('advanced')}
                >
                    <ButtonText
                        color={props.level === 'advanced' ? '#000000' : false}
                    >Avançado / Monstro</ButtonText>
                </DefaultButton>

            </LevelArea>
        </Container>
    );
};

Page.navigationOptions = ({ navigation }) => {

    const nextAction = () => {
        if (!navigation.state.params || !navigation.state.params.level) {
            alert('Você precisa selecionar um nível!');
            return;
        }
        navigation.navigate('StarterRecommendations');
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
        level: state.userReducer.level,
        workoutDays: state.userReducer.workoutDays
    }
}

const mapDispatchProps = (dispatch) => {
    return {
        setLevel: (level) => dispatch({ type: 'SET_LEVEL', payload: { level } })
    }
}

export default connect(mapStateToProps, mapDispatchProps)(Page);