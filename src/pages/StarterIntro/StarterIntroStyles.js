import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
    margin-left: 30px;
    margin-right: 30px;
`;

export const WelcomeText = styled.Text`
    font-size: 22px;
    color: #333333;
    margin-top: 50px;
`;

export const WelcomeImage = styled.View`
    flex: 1;
    justify-content: center;
`;

export const WelcomeLogo = styled.Image`
    width: 200px;
    height: 200px;
`;

export const ConfigArea = styled.View`
    margin-bottom: 50px;
    width: 100%;
`;

export const ButtonText = styled.Text`
    color: #FFFFFF;
`;