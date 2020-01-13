import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Container from '../../components/ContainerComponent';

import {
    ConfigButtonArea,
    ConfigButtonImage
} from './HomeStyle';

const Page = (props) => {

    return (
        <Container>

        </Container>
    );
};

Page.navigationOptions = ({ navigation }) => {

    const ConfigButton = () => {
        const buttonAction = () => {
            navigation.navigate('HomeConfig');
        }

        return (
            <ConfigButtonArea onPress={buttonAction}>
                <ConfigButtonImage source={require('../../assets/config.png')}></ConfigButtonImage>
            </ConfigButtonArea>
        )
    }

    return {
        title: 'Seu progresso diário',
        headerRight: <ConfigButton></ConfigButton>,
        headerRightContainerStyle: {
            marginRight: 10
        }
    };
};

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchProps)(Page);