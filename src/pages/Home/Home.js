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
    const [selectedDay, setSelectedDay] = useState(today.getDate());

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

            <DaysScroll
                selectedMonth={selectedMonth}
                selectedDay={selectedDay}
                setSelectedDay={setSelectedDay}

                dailyProgress={props.dailyProgress}
                workoutDays={props.workoutDays}
            ></DaysScroll>

            <DayStatus
                selectedMonth={selectedMonth}
                selectedDay={selectedDay}
                setSelectedDay={setSelectedDay}

                dailyProgress={props.dailyProgress}
                workoutDays={props.workoutDays}

                addProgress={props.addProgress}
                deleteProgress={props.deleteProgress}
                gotToWorkout={() => props.navigation.navigate('WorkoutStack')}
            ></DayStatus>

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
        dailyProgress: state.userReducer.dailyProgress,
        workoutDays: state.userReducer.workoutDays
    }
}

const mapDispatchProps = (dispatch) => {
    return {
        addProgress: (date) => dispatch({ type: 'ADD_PROGRESS', payload: { date } }),
        deleteProgress: (date) => dispatch({ type: 'DELETE_PROGRESS', payload: { date } })
    }
}

export default connect(mapStateToProps, mapDispatchProps)(Page);