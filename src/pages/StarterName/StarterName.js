import React from 'react';
import { connect } from 'react-redux';

import {
    HeaderText,
    NameInput,
    NextButton
} from '../StarterName/StarterNameStyles';

import Container from '../../components/ContainerComponent';

const Page = (props) => {

    const nextAction = () => {
        if (!props.name) {
            alert('Você precisa digitar seu nome!');
            return;
        }

        props.navigation.navigate('StarterDays');
    };

    const handleChangeName = (text) => {
        props.setName(text);
        props.navigation.setParams({ name: text });
    };

    return (
        <Container>
            <HeaderText>Qual é o seu nome?</HeaderText>
            <NameInput
                value={props.name}
                onChangeText={handleChangeName}
                autoFocus={true}
                autoCapitalize="words"
                onSubmitEditing={nextAction}
            ></NameInput>
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