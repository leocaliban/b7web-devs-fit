import React, { useState, useEffect, useRef } from 'react';

import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const screenWidth = Math.round(Dimensions.get('window').width);

let dayWide = Math.round(screenWidth / 9);
let offsetWide = Math.round((screenWidth - dayWide) / 2);

const MainScroll = styled.ScrollView`
    width: 100%;
    height: 50px;
`;

const DayButton = styled.TouchableHighlight`
    width: ${props => props.width};
    justify-content: center;
    align-items: center;
`;

const DayItem = styled.View`
    width: 30px;
    height: 30px;
    border-radius: 15px;
    background-color: ${props => props.backgroundColor};
    justify-content: center;
    align-items: center;
`;

const DayText = styled.Text`

`;

const Day = ({ day, month, dailyProgress, workoutDays, onPress }) => {

    let backgroundColor = '#FFF2B0';

    let today = new Date();
    today.setHours(0);
    today.setMinutes(0);
    today.setSeconds(0);
    today.setMilliseconds(0);

    let showDate = new Date(today.getFullYear(), month, day);

    if (workoutDays.includes(showDate.getDay())) {

        if (showDate.getTime() < today.getTime()) {
            let onlyYear = showDate.getFullYear();
            let onlyMonth = showDate.getMonth() + 1;
            let onlyDay = showDate.getDate();
            onlyMonth = (onlyMonth < 10) ? '0' + onlyMonth : onlyMonth;
            onlyDay = (onlyDay < 10) ? '0' + onlyDay : onlyDay;

            let formattedDate = `${onlyYear}-${onlyMonth}-${onlyDay}`;

            if (dailyProgress.includes(formattedDate)) {
                backgroundColor = '#B5FFB8';
            } else {
                backgroundColor = '#FFB5B5';
            }
        }
    } else {
        backgroundColor = '#F4F4F4';
    }

    verificarDataDeHoje(showDate.getTime(), today.getTime());




    function verificarDataDeHoje(dataExibida, dataHoje) {
        if (dataExibida === dataHoje) {
            backgroundColor = '#B5EEFF';
        }
    }

    return (
        <DayButton
            width={dayWide}
            onPress={onPress}
            underlayColor="transparent"
        >
            <DayItem backgroundColor={backgroundColor}>
                <DayText>{day}</DayText>
            </DayItem>
        </DayButton>

    );
};


export default (props) => {

    const [selectedDay, setSelectedDay] = useState(props.selectedDay);

    const DayRef = useRef();

    let days = [];
    let daysInMonth = new Date(new Date().getFullYear(), (props.selectedMonth + 1), 0).getDate();

    for (let i = 1; i <= daysInMonth; i++) {
        days.push(i);
    }

    const handleScrollEnd = (event) => {
        let scrollPositionX = event.nativeEvent.contentOffset.x;
        let targetDay = Math.round(scrollPositionX / dayWide) + 1;
        setSelectedDay(targetDay);
    };

    const scrollToDay = (d) => {
        let scrollPositionX = (d - 1) * dayWide;
        DayRef.current.scrollTo({ x: scrollPositionX, y: 0, animated: true });
        setSelectedDay(d);
    };

    useEffect(() => {
        props.setSelectedDay(selectedDay);
    }, [selectedDay]);

    useEffect(() => {
        setTimeout(() => {
            if (props.selectedMonth === new Date().getMonth()) {
                scrollToDay(new Date().getDate());
            } else {
                scrollToDay(1);
            }
        }, 10);
    }, [props.selectedMonth]);

    return (
        <MainScroll
            horizontal={true}
            ref={DayRef}
            showsHorizontalScrollIndicator={false}
            decelerationRate="fast"
            snapToInterval={dayWide}
            contentContainerStyle={{ paddingLeft: offsetWide, paddingRight: offsetWide }}
            onMomentumScrollEnd={handleScrollEnd}
        >

            {days.map((day, index) => (
                <Day
                    key={index}
                    day={day}
                    month={props.selectedMonth}
                    dailyProgress={props.dailyProgress}
                    workoutDays={props.workoutDays}
                    onPress={() => scrollToDay(day)}
                ></Day>
            ))}
        </MainScroll>
    );
};