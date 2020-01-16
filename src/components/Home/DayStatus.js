import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';

import DefaultButton from '../../components/DefaultButton';

const Arrow = styled.View`
    width: 0;
    height: 0;
    border-left-color: transparent;
    border-left-width: 15px;
    border-bottom-width: 15px;
    border-bottom-color: #EDEDED;
    border-right-width: 15px;
    border-right-color: transparent;

`;

const Card = styled.View`
    width: 90%;
    padding: 20px;
    background-color: #EDEDED;
    border-radius: 10px;
`;

const MainText = styled.Text`
    font-size: 15px;
    align-self: center;
    font-weight: bold;
`;

const CardTime = styled.Text`
    font-size: 13px;
    align-self: center;
`;

const CardButtonText = styled.Text`
    color: #FFF;
    font-weight: bold;
`;

export default (props) => {

    let today = new Date();
    today.setHours(0);
    today.setMinutes(0);
    today.setSeconds(0);
    today.setMilliseconds(0);

    let showDate = new Date(today.getFullYear(), props.selectedMonth, props.selectedDay);

    let onlyYear = showDate.getFullYear();
    let onlyMonth = showDate.getMonth() + 1;
    let onlyDay = showDate.getDate();
    onlyMonth = (onlyMonth < 10) ? '0' + onlyMonth : onlyMonth;
    onlyDay = (onlyDay < 10) ? '0' + onlyDay : onlyDay;

    let formattedDate = `${onlyYear}-${onlyMonth}-${onlyDay}`;

    let dayOff = false;
    let isToday = false;
    let isFuture = false;
    let isDone = false;

    if (!props.workoutDays.includes(showDate.getDay())) {
        dayOff = true;
    } else if (showDate.getTime() > today.getTime()) {
        isFuture = true;
    } else {
        if (props.dailyProgress.includes(formattedDate)) {
            isDone = true;
        } else {
            isDone = false;
        }
    }

    if (showDate.getTime() === today.getTime()) {
        isToday = true;
    }

    const setDone = () => {
        props.addProgress(formattedDate);
    };

    const setUnDone = () => {
        props.deleteProgress(formattedDate);
    };
    return (
        <>
            <Arrow></Arrow>
            <Card>
                {dayOff &&
                    <MainText>Dia de descanso!</MainText>
                }
                {isFuture &&
                    <MainText>Data no futuro</MainText>
                }
                {!dayOff && !isFuture && isDone &&
                    <>
                        <MainText>Parabéns, treinamento cumprido!</MainText>
                        <DefaultButton
                            bgcolor="#4AC34E"
                            marginTop="20"
                            onPress={setUnDone}
                            underlayColor="#4AC34E"
                        >
                            <CardButtonText>DESMARCAR</CardButtonText>
                        </DefaultButton>
                    </>
                }
                {!dayOff && !isFuture && !isDone && !isToday &&
                    <>
                        <MainText>Você não treinou neste dia.</MainText>
                        <DefaultButton
                            bgcolor="#4AC34E"
                            marginTop="20"
                            onPress={setDone}
                            underlayColor="#4AC34E"
                        >
                            <CardButtonText>MARCAR COMO FEITO</CardButtonText>
                        </DefaultButton>
                    </>
                }
                {!dayOff && !isFuture && !isDone && isToday &&
                    <>
                        <MainText>HOJE TEM TREINO!</MainText>
                        <CardTime>Você tem 30 minutos para treinar.</CardTime>
                        <DefaultButton
                            bgcolor="#4AC34E"
                            marginTop="20"
                            onPress={props.goToWorkout}
                            underlayColor="#4AC34E"
                        >
                            <CardButtonText>INICIAR TREINO</CardButtonText>
                        </DefaultButton>
                    </>

                }
            </Card>
        </>
    );
};