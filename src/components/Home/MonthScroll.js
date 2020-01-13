import React, { useState, useEffect, useRef } from 'react';

import { Dimensions } from 'react-native';
import styled from 'styled-components/native';


let months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
];

const screenWidth = Math.round(Dimensions.get('window').width);

let thirdWide = (screenWidth / 3);

const MainScroll = styled.ScrollView`
    width: 100%;
    height: 60px;
`;

const MonthButton = styled.TouchableHighlight`
    width: ${props => props.width};
    justify-content: center;
    align-items: center;
`;

const MonthItem = styled.View`
    width: 90%;
    height: 30px;
    background-color: #EEEEEE;
    border-radius: 15px;
    justify-content: center;
    align-items: center;
`;

const MonthText = styled.Text`

`;


export default (props) => {

    const [selectedMonth, setSelectedMonth] = useState(props.selectedMonth);

    const MonthRef = useRef();

    const handleScrollEnd = (event) => {
        let scrollPositionX = event.nativeEvent.contentOffset.x;
        let targetMonth = Math.round(scrollPositionX / thirdWide);
        setSelectedMonth(targetMonth);
    };

    const scrollToMonth = (m) => {
        let scrollPositionX = m * thirdWide;
        MonthRef.current.scrollTo({ x: scrollPositionX, y: 0, animated: true });
    };

    useEffect(() => {
        props.setSelectedMonth(selectedMonth);
    }, [selectedMonth]);

    useEffect(() => {
        setTimeout(() => {
            scrollToMonth(selectedMonth);
        }, 10);
    }, [props.setSelectedMonth, selectedMonth]);

    return (
        <MainScroll
            horizontal={true}
            ref={MonthRef}
            showsHorizontalScrollIndicator={false}
            decelerationRate="fast"
            snapToInterval={thirdWide}
            contentContainerStyle={{ paddingLeft: thirdWide, paddingRight: thirdWide }}
            onMomentumScrollEnd={handleScrollEnd}
        >
            {months.map((m, index) => (
                <MonthButton
                    key={index}
                    width={thirdWide}
                    onPress={() => setSelectedMonth(index)}
                    underlayColor="transparent"
                >
                    <MonthItem style={index === selectedMonth ? {
                        backgroundColor: '#CCCCCC',
                        width: '100%',
                    } : {}}>
                        <MonthText>{m}</MonthText>
                    </MonthItem>
                </MonthButton>
            ))}
        </MainScroll>
    );
};