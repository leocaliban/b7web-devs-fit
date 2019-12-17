import React from 'react';

import {
    WelcomeText,
    WelcomeImage,
    WelcomeLogo,
    ConfigArea,
    ButtonText
} from './StarterIntroStyles';

import DefaultButton from '../../components/DefaultButton';
import Container from '../../components/ContainerComponent';

const Page = (props) => {

    const start = () => {
        props.navigation.navigate('StarterName');
    };

    return (
        <Container justifyContent="center">
            <WelcomeText>Bem Vindo ao DevsFit</WelcomeText>
            <WelcomeImage>
                <WelcomeLogo source={require('../../assets/boneco.png')}></WelcomeLogo>
            </WelcomeImage>
            <ConfigArea>
                <DefaultButton
                    width="100%"
                    bgcolor="#0072C0"
                    underlayColor="#0B7AC6"
                    onPress={start}
                >
                    <ButtonText>Iniciar Configuração</ButtonText>
                </DefaultButton>
            </ConfigArea>
        </Container>
    );
};

Page.navigationOptions = {
    header: null
};

export default Page;