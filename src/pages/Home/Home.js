import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import MonthScroll from '../../components/Home/MonthScroll';
import DaysScroll from '../../components/Home/DaysScroll';
import DayStatus from '../../components/Home/DayStatus';

import {
    ConfigButtonArea,
    ConfigButtonImage,
    Legend,
    LegendText,
    LegendItem,
    LegendBox,
    Container
} from './HomeStyle';

const Page = (props) => {

    let today = new Date();

    const [selectedMonth, setSelectedMonth] = useState(today.getMonth());

    const legendas = [
        { label: 'Hoje', color: '#B5EEFF' },
        { label: 'Treino feito', color: '#B5FFB8' },
        { label: 'Treino perdido', color: '#FFB5B5' },
        { label: 'Dia de descanso', color: '#F4F4F4' },
        { label: 'Dia futuro', color: '#FFF2B0' },
    ];

    return (
        <Container>
            <MonthScroll
                selectedMonth={selectedMonth}
                setSelectedMonth={setSelectedMonth}
            ></MonthScroll>
            <DaysScroll></DaysScroll>
            <DayStatus></DayStatus>


            <LegendText>Mês: {selectedMonth}</LegendText>
            <Legend>
                <LegendText>Legenda:</LegendText>

                {legendas.map((legenda, index) =>
                    <LegendItem key={index}>
                        <LegendBox color={legenda.color}></LegendBox>
                        <LegendText>{legenda.label}</LegendText>
                    </LegendItem>
                )}
            </Legend>
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